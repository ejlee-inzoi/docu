# needs.set_full

Overview
==

- Fills the specified need category on the target character, or all needs when category is empty.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Needs Full |
| Category | `needs` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetNeedsFull` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| category | string | no | — | Needs category name, or empty for all |
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('needs.set_full', {
  category: '', // optional
  entity_id: 0, // optional
});
```