# relationships.set_value

Overview
==

- Set relationship value for an entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Relationship Value |
| Category | `relationships` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetRelationship`, `relationship.set_value` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity id |
| value | float | yes | — | Relationship value |
| relationship_id | name | no | — | Relationship id (optional) |

Usage
==

```js
await inzoi.cli.execute('relationships.set_value', {
  entity_id: 0,
  value: 0.0,
  relationship_id: '', // optional
});
```