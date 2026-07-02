# marriage.marry

Overview
==

- Instantly marry two characters. Bypasses normal marriage conditions.

Metadata
==

| Field | Value |
|---|---|
| Display | Marry |
| Category | `marriage` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character A entity ID (default: possessed) |
| target_entity_id | entityId | yes | — | Character B entity ID |

Usage
==

```js
await inzoi.cli.execute('marriage.marry', {
  entity_id: 0, // optional
  target_entity_id: 0,
});
```