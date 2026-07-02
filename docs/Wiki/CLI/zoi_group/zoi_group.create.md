# zoi_group.create

Overview
==

- Creates a new Zoi group with the specified leader and members. Members walk together, share activities, and can do group interactions.

Metadata
==

| Field | Value |
|---|---|
| Display | Create Zoi Group |
| Category | `zoi_group` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| leader_entity_id | entityId | no | — | Group leader entity ID (default: possessed) |
| member_entity_ids | string | yes | — | Comma-separated entity IDs to add as members (excluding leader) |
| type | string | no | Default | Group type: Default, Family, or Date |

Usage
==

```js
await inzoi.cli.execute('zoi_group.create', {
  leader_entity_id: 0, // optional
  member_entity_ids: '',
  type: 'Default', // optional
});
```