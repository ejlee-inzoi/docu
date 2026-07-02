# relationships.set_full

Overview
==

- Max out relationship value for an entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Relationship Full |
| Category | `relationships` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetRelationshipFull`, `relationship.set_full` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity id |
| relationship_id | name | no | — | Relationship id (optional) |

Usage
==

```js
await inzoi.cli.execute('relationships.set_full', {
  entity_id: 0,
  relationship_id: '', // optional
});
```