# zoi_group.disband

Overview
==

- Disbands the Zoi group that the specified character belongs to. All members leave the group.

Metadata
==

| Field | Value |
|---|---|
| Display | Disband Zoi Group |
| Category | `zoi_group` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Any member of the group (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('zoi_group.disband', {
  entity_id: 0, // optional
});
```