import {Command, flags} from '@oclif/command'
import axios from 'axios'
import {promises as fs} from 'fs'

export default class Push extends Command {
  static description = 'Push a language file'

  static flags = {
    help: flags.help({char: 'h'}),
    force: flags.boolean({char: 'f', description: 'force push, overwrite existing values'}),
  }

  static args = [
    {name: 'server'},
    {name: 'input'},
  ]

  async run() {
    const {args, flags} = this.parse(Push)

    const fileData = await fs.readFile(args.input).then(b => b.toString())
    const parsedFile = JSON.parse(fileData)

    const result = await axios.post(args.server, {
      force: flags.force,
      lang: parsedFile,
    }).then(r => r.data)

    this.log(`Processed ${result.total} total keys`)

    if (result.updated > 0) {
      this.log(`Updated ${result.updated} keys`)
    }

    if (result.created > 0) {
      this.log(`Created ${result.created} keys`)
    }

    if (result.unchanged.length > 0) {
      for (const key of result.unchanged) {
        this.log('Unprocessed Key: ' + key)
      }
      this.error('Some keys are out of sync, use force push or pull new changes!')
      this.exit(1)
    }

    this.log('Finished')
  }
}
