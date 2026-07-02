# zoi_group.add_member

Overview
==

- Adds a character to an existing Zoi group. Specify which group by providing a current member's entity_id.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Group Member |
| Category | `zoi_group` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Character entity ID to add to the group |
| group_member_entity_id | entityId | no | — | Any existing member of the target group (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('zoi_group.add_member', {
  entity_id: 0,
  group_member_entity_id: 0, // optional
});
```