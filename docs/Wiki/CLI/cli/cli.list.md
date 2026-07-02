# cli.list

Overview
==

- Lists registered CLI commands. Optionally filter by category.

Metadata
==

| Field | Value |
|---|---|
| Display | List CLI Commands |
| Category | `cli` |
| Access | `Public` |
| Scope | `Both` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| category | string | no | — | Category filter (e.g. stat, economy) |

Usage
==

```js
await inzoi.cli.execute('cli.list', {
  category: '', // optional
});
```