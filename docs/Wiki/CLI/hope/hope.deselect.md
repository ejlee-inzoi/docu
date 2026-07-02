# hope.deselect

Overview
==

- Deselects a hope by slot index on the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Deselect Hope |
| Category | `hope` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| slot_index | int | yes | — | Slot index (-1 for last) |

Usage
==

```js
await inzoi.cli.execute('hope.deselect', {
  entity_id: 0, // optional
  slot_index: 0,
});
```