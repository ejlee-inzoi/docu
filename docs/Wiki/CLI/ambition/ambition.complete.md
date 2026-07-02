# ambition.complete

Overview
==

- Instantly completes a specific ambition item on the target character (cheat; no-op in shipping builds). Use ambition.get to find item ids.

Metadata
==

| Field | Value |
|---|---|
| Display | Complete Ambition |
| Category | `ambition` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| ambition_item_id | name | yes | — | Ambition item ID to complete (see ambition.get) |

Usage
==

```js
await inzoi.cli.execute('ambition.complete', {
  entity_id: 0, // optional
  ambition_item_id: '',
});
```