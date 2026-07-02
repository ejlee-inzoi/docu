# relationships.get_value_between

Overview
==

- Returns relationship stat values from owner toward target. Unlike relationships.get_value, the owner is explicitly specified instead of defaulting to possessed.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Relationship Between |
| Category | `relationships` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| owner_id | entityId | yes | — | Owner character entity ID |
| target_id | entityId | yes | — | Target character entity ID |
| relationship_id | name | no | — | Relationship stat ID (optional, omit for all) |

Usage
==

```js
await inzoi.cli.execute('relationships.get_value_between', {
  owner_id: 0,
  target_id: 0,
  relationship_id: '', // optional
});
```