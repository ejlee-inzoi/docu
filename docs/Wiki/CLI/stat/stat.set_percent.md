# stat.set_percent

Overview
==

- Sets a stat as a ratio (0.0~1.0) of its min-max range on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Stat Percent |
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
| percent | float | yes | — | Ratio 0.0 ~ 1.0 |

Usage
==

```js
await inzoi.cli.execute('stat.set_percent', {
  entity_id: 0, // optional
  stat_id: '',
  percent: 0.0,
});
```