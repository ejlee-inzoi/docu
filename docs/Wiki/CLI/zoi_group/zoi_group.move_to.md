# zoi_group.move_to

Overview
==

- Makes the entire Zoi group walk together to a destination site. Members gather near the leader first, then move as a group. Far members are auto-teleported.

Metadata
==

| Field | Value |
|---|---|
| Display | Group Move To |
| Category | `zoi_group` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Any group member entity ID (default: possessed) |
| destination | string | yes | — | Destination site ID |

Usage
==

```js
await inzoi.cli.execute('zoi_group.move_to', {
  entity_id: 0, // optional
  destination: '',
});
```