# cli.help

Overview
==

- Shows detailed info, params, and aliases for a specific CLI command.

Metadata
==

| Field | Value |
|---|---|
| Display | CLI Command Help |
| Category | `cli` |
| Access | `Public` |
| Scope | `Both` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| command | string | yes | — | Command ID to look up |

Usage
==

```js
await inzoi.cli.execute('cli.help', {
  command: '',
});
```