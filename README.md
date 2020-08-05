lang-sync-cli
=============



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/lang-sync-cli.svg)](https://npmjs.org/package/lang-sync-cli)
[![Downloads/week](https://img.shields.io/npm/dw/lang-sync-cli.svg)](https://npmjs.org/package/lang-sync-cli)
[![License](https://img.shields.io/npm/l/lang-sync-cli.svg)](https://github.com/Development/lang-sync-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g lang-sync-cli
$ lang-sync COMMAND
running command...
$ lang-sync (-v|--version|version)
lang-sync-cli/1.0.0 linux-x64 node-v12.4.0
$ lang-sync --help [COMMAND]
USAGE
  $ lang-sync COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`lang-sync help [COMMAND]`](#lang-sync-help-command)
* [`lang-sync pull [SERVER] [OUTPUT]`](#lang-sync-pull-server-output)
* [`lang-sync push [SERVER] [INPUT]`](#lang-sync-push-server-input)

## `lang-sync help [COMMAND]`

display help for lang-sync

```
USAGE
  $ lang-sync help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `lang-sync pull [SERVER] [OUTPUT]`

Pull a language file

```
USAGE
  $ lang-sync pull [SERVER] [OUTPUT]

OPTIONS
  -h, --help   show CLI help
  -w, --write  write changes to file
```

_See code: [src/commands/pull.ts](https://github.com/Development/lang-sync-cli/blob/v1.0.0/src/commands/pull.ts)_

## `lang-sync push [SERVER] [INPUT]`

Push a language file

```
USAGE
  $ lang-sync push [SERVER] [INPUT]

OPTIONS
  -f, --force  force push, overwrite existing values
  -h, --help   show CLI help
```

_See code: [src/commands/push.ts](https://github.com/Development/lang-sync-cli/blob/v1.0.0/src/commands/push.ts)_
<!-- commandsstop -->
