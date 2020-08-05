import {Command, flags} from '@oclif/command'
import axios from 'axios'
import {promises as fs} from 'fs'
import {unflatten, flatten} from 'flat'
import * as sortKeys from 'sort-keys'
import * as chalk from 'chalk'

export default class Pull extends Command {
  static description = 'Pull a language file'

  static flags = {
    help: flags.help({char: 'h'}),
    write: flags.boolean({char: 'w', description: 'write changes to file'}),
  }

  static args = [
    {name: 'server'},
    {name: 'output'},
  ]

  async run() {
    const {args, flags} = this.parse(Pull)

    let serverData = await axios.get(args.server).then(r => r.data)
    serverData = flatten(serverData)

    this.log(`Pulled ${Object.keys(serverData).length} keys`)

    try {
      var existingData = JSON.parse((await fs.readFile(args.output)).toString())
      existingData = flatten(existingData)
    } catch (error) {
      this.error(error);
    }

    if (existingData) {
      for (const [key, value] of Object.entries(serverData)) {
        const existingValue = existingData[key]
        if (existingValue !== value) {
          existingData[key] = value
          this.log(`${chalk.blue(key)}: ${chalk.red(existingValue)} => ${chalk.green(value)}`)
        }
      }
      serverData = existingData
    }

    serverData = sortKeys(serverData, {deep: true})

    if (flags.write) {
      await fs.writeFile(args.output, JSON.stringify(unflatten(serverData), null, 2));
      this.log(`Wrote data to ${args.output}`)
    }


    this.log('Finished')
  }
}
