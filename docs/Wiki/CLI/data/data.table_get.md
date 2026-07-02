# data.table_get

Overview
==

- Returns a single DataTable row as JSON. alias: table alias (e.g. Aging), row: row name.

Metadata
==

| Field | Value |
|---|---|
| Display | Query DataTable Row |
| Category | `data` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| alias | string | yes | — | DataTable alias (e.g. 'Aging', 'Stat', 'Site') |
| row | string | yes | — | Row name (e.g. 'Adult', 'Hunger') |

Usage
==

```js
await inzoi.cli.execute('data.table_get', {
  alias: '',
  row: '',
});
```