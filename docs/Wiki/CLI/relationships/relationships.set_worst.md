# relationships.set_worst

Overview
==

- Minimize relationship value for an entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Relationship Worst |
| Category | `relationships` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetRelationshipWorst`, `relationship.set_worst` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity id |
| relationship_id | name | no | — | Relationship id (optional) |

Usage
==

```js
await inzoi.cli.execute('relationships.set_worst', {
  entity_id: 0,
  relationship_id: '', // optional
});
```