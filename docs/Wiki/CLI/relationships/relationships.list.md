# relationships.list

Overview
==

- Returns all relationships a character has, with each partner's name and relationship stats. Use min_value to filter out weak (e.g. crowd) relationships.

Metadata
==

| Field | Value |
|---|---|
| Display | List Relationships |
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
| min_value | float | no | — | Only include relationships whose max stat value is >= this (default: 0) |

Usage
==

```js
await inzoi.cli.execute('relationships.list', {
  owner_id: 0,
  min_value: 0.0, // optional
});
```