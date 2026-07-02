# appearance.get_outfit_category

Overview
==

- Returns the character's current base outfit category and any active overlay outfits.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Outfit Category |
| Category | `appearance` |
| Access | `Public` |
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
await inzoi.cli.execute('appearance.get_outfit_category', {
  entity_id: 0, // optional
});
```