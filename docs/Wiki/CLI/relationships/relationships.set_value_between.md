# relationships.set_value_between

Overview
==

- Sets relationship stat value between any two characters (always bidirectional). Romance stat is guarded by IsLovable; family stat requires existing family relationship.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Relationship Between |
| Category | `relationships` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `relationship.set_value_between` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| owner_id | entityId | yes | — | Owner character entity ID |
| target_id | entityId | yes | — | Target character entity ID |
| value | float | yes | — | Relationship value to set |
| relationship_id | name | no | — | Relationship stat ID (default: all stats) |

Usage
==

```js
await inzoi.cli.execute('relationships.set_value_between', {
  owner_id: 0,
  target_id: 0,
  value: 0.0,
  relationship_id: '', // optional
});
```