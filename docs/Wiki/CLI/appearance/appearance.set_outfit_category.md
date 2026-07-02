# appearance.set_outfit_category

Overview
==

- Changes the character's outfit to a specific category (e.g. Swimwear, Formal, Sleep). The character must have an outfit saved in that category from the customize screen.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Outfit Category |
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
| category | string | yes | — | Outfit category: Everyday, Formal, School, Sleep, Party, Sports, Swimwear, Summer, Winter |

Usage
==

```js
await inzoi.cli.execute('appearance.set_outfit_category', {
  entity_id: 0, // optional
  category: '',
});
```