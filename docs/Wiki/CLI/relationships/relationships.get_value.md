# relationships.get_value

Overview
==

- Returns relationship stat values for the target entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Relationship Value |
| Category | `relationships` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity ID |
| relationship_id | name | no | — | Relationship stat ID (optional) |

Usage
==

```js
await inzoi.cli.execute('relationships.get_value', {
  entity_id: 0,
  relationship_id: '', // optional
});
```