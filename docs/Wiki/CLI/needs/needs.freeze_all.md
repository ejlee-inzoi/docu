# needs.freeze_all

Overview
==

- Freezes or unfreezes need decay for the target character.

Metadata
==

| Field | Value |
|---|---|
| Display | Freeze All Needs |
| Category | `needs` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `FreezeAllNeeds` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| enable | bool | yes | — | True to freeze needs |

Usage
==

```js
await inzoi.cli.execute('needs.freeze_all', {
  entity_id: 0, // optional
  enable: false,
});
```