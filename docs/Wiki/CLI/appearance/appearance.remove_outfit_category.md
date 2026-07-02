# appearance.remove_outfit_category

Overview
==

- Removes an active outfit overlay for a specific category, reverting to the base outfit. Use appearance.get_outfit_category to see active overlays.

Metadata
==

| Field | Value |
|---|---|
| Display | Remove Outfit Category |
| Category | `appearance` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID (default: possessed) |
| category | string | yes | — | Outfit category to remove: Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter |

Usage
==

```js
await inzoi.cli.execute('appearance.remove_outfit_category', {
  entity_id: 0, // optional
  category: '',
});
```