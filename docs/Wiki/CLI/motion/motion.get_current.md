# motion.get_current

Overview
==

- Get the motion(s) currently playing on the target Zoi. Returns playing=false if idle, otherwise an array of active montage instances with anim_id, position (seconds), total_length, rate_scale, and group. Only Root component motions are reported (full-body).

Metadata
==

| Field | Value |
|---|---|
| Display | Get Current Motion |
| Category | `motion` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `MotionGetCurrent` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('motion.get_current', {
  entity_id: 0, // optional
});
```