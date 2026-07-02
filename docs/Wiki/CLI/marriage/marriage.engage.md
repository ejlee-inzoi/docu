# marriage.engage

Overview
==

- Instantly engage two characters (adds the 'engagement' relationship). Forced by default; pass guard=true to require IsLovable eligibility.

Metadata
==

| Field | Value |
|---|---|
| Display | Engage |
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
| guard | bool | no | false | If true, require the pair to be lovable (eligible). Default false (force). |

Usage
==

```js
await inzoi.cli.execute('marriage.engage', {
  entity_id: 0, // optional
  target_entity_id: 0,
  guard: false, // optional
});
```