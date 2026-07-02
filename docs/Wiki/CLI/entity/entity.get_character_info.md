# entity.get_character_info

Overview
==

- Returns detailed character info including name, gender, growthStep, appearance (hair, skin, garments, accessories, body).

Metadata
==

| Field | Value |
|---|---|
| Display | Get Character Info |
| Category | `entity` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('entity.get_character_info', {
  entity_id: 0, // optional
});
```