# zoi_group.set_option

Overview
==

- Configures Zoi group behavior options. act_near_group: members stay near leader. leader_autonomy_only: only leader acts autonomously, others follow.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Group Options |
| Category | `zoi_group` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| act_near_group | bool | no | — | Members do autonomous activities near the leader |
| leader_autonomy_only | bool | no | — | Only leader acts autonomously, others wait/follow |

Usage
==

```js
await inzoi.cli.execute('zoi_group.set_option', {
  act_near_group: false, // optional
  leader_autonomy_only: false, // optional
});
```