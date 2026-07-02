# data.list_rows

Overview
==

- Returns all row names of a specific DataTable alias.

Metadata
==

| Field | Value |
|---|---|
| Display | List DataTable Rows |
| Category | `data` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| alias | string | yes | — | DataTable alias, e.g. Aging |

Usage
==

```js
await inzoi.cli.execute('data.list_rows', {
  alias: '',
});
```