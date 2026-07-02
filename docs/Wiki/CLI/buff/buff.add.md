# buff.add

Overview
==

- Adds a buff to the target character. Optionally overrides its lifetime with duration_minutes (finite-duration buffs only; omit to use the table default).

Metadata
==

| Field | Value |
|---|---|
| Display | Add Buff |
| Category | `buff` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| buff_id | name | yes | — | Buff ID to add |
| duration_minutes | int | no | — | Override buff duration in in-game minutes (omit = table default) |

Usage
==

```js
await inzoi.cli.execute('buff.add', {
  entity_id: 0, // optional
  buff_id: '',
  duration_minutes: 0, // optional
});
```