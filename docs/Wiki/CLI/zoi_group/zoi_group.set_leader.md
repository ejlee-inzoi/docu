# zoi_group.set_leader

Overview
==

- Changes the leader of the Zoi group to the specified character. The character must already be a member of the group.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Group Leader |
| Category | `zoi_group` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Entity ID of the new leader |

Usage
==

```js
await inzoi.cli.execute('zoi_group.set_leader', {
  entity_id: 0,
});
```