# stat.set

Overview
==

- Sets a stat to the given value on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Stat |
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
| stat_id | name | yes | — | Stat ID |
| value | float | yes | — | Target value |

Usage
==

```js
await inzoi.cli.execute('stat.set', {
  entity_id: 0, // optional
  stat_id: '',
  value: 0.0,
});
```