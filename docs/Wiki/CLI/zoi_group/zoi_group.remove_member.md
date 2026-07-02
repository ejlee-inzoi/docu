# zoi_group.remove_member

Overview
==

- Removes a character from their Zoi group. If only 1 member remains, the group is automatically disbanded.

Metadata
==

| Field | Value |
|---|---|
| Display | Remove Group Member |
| Category | `zoi_group` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Character entity ID to remove from the group |

Usage
==

```js
await inzoi.cli.execute('zoi_group.remove_member', {
  entity_id: 0,
});
```