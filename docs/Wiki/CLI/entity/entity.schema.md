# entity.schema

Overview
==

- Return UPROPERTY schema (name, type, enum values) for an entity or component.

Metadata
==

| Field | Value |
|---|---|
| Display | Entity Schema |
| Category | `entity` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `EntitySchema` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| component | string | no | — | Component type name (optional) |

Usage
==

```js
await inzoi.cli.execute('entity.schema', {
  entity_id: 0, // optional
  component: '', // optional
});
```