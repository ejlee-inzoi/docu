# marriage.break_engagement

Overview
==

- Breaks an engagement (removes the 'engagement' relationship). If target_entity_id is omitted, the engaged partner is found automatically.

Metadata
==

| Field | Value |
|---|---|
| Display | Break Engagement |
| Category | `marriage` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `marriage.disengage` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID (default: possessed) |
| target_entity_id | entityId | no | — | Engaged partner entity ID (optional; auto-detected if omitted) |

Usage
==

```js
await inzoi.cli.execute('marriage.break_engagement', {
  entity_id: 0, // optional
  target_entity_id: 0, // optional
});
```