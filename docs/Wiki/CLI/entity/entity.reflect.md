# entity.reflect

Overview
==

- Serialize entity or component UPROPERTYs via UE reflection.

Metadata
==

| Field | Value |
|---|---|
| Display | Entity Reflect |
| Category | `entity` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `EntityReflect` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| component | string | no | — | Component type name (optional, e.g. Emotion or FB2EmotionComponent) |

Usage
==

```js
await inzoi.cli.execute('entity.reflect', {
  entity_id: 0, // optional
  component: '', // optional
});
```