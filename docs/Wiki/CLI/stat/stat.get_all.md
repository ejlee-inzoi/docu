# stat.get_all

Overview
==

- Returns all stats with value, min, max, pct, and noDecay for the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Get All Stats |
| Category | `stat` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('stat.get_all', {
  entity_id: 0, // optional
});
```