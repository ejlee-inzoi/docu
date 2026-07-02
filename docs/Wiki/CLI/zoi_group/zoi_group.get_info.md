# zoi_group.get_info

Overview
==

- Returns group information for the specified character: group_id, type, leader, all members with display names, and group options. Returns has_group=false if not in a group.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Zoi Group Info |
| Category | `zoi_group` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('zoi_group.get_info', {
  entity_id: 0, // optional
});
```