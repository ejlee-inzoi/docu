# zoi_group.follow

Overview
==

- Makes all non-leader group members walk to the leader's current position. Call repeatedly to keep members following as the leader moves. Use after ground-click movement to make the group follow.

Metadata
==

| Field | Value |
|---|---|
| Display | Group Follow Leader |
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

Usage
==

```js
await inzoi.cli.execute('zoi_group.follow', {
  entity_id: 0, // optional
});
```