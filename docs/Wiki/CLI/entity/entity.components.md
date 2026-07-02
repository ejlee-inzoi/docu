# entity.components

Overview
==

- List all component type names attached to an entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Entity Components |
| Category | `entity` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `EntityComponents` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('entity.components', {
  entity_id: 0, // optional
});
```