# marriage.divorce

Overview
==

- Instantly divorce the character from their spouse. No UI popup.

Metadata
==

| Field | Value |
|---|---|
| Display | Divorce |
| Category | `marriage` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('marriage.divorce', {
  entity_id: 0, // optional
});
```