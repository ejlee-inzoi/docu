# stat.add

Overview
==

- Adds the given value to a stat on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Stat |
| Category | `stat` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| stat_id | name | yes | — | Stat ID (e.g. Hunger, Sleep) |
| value | float | yes | — | Amount to add |

Usage
==

```js
await inzoi.cli.execute('stat.add', {
  entity_id: 0, // optional
  stat_id: '',
  value: 0.0,
});
```