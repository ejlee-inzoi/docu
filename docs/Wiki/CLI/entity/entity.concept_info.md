# entity.concept_info

Overview
==

- Show concept character info: ConceptId, pool cursor, AppearancePresetId, OutfitPresetId. (BL-56286 verification)

Metadata
==

| Field | Value |
|---|---|
| Display | Concept Character Info |
| Category | `entity` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('entity.concept_info', {
  entity_id: 0, // optional
});
```