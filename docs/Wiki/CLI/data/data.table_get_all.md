# data.table_get_all

Overview
==

- Returns all rows of a DataTable as a JSON array. alias: table alias.

Metadata
==

| Field | Value |
|---|---|
| Display | Query All DataTable Rows |
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

Usage
==

```js
await inzoi.cli.execute('data.table_get_all', {
  alias: '',
});
```