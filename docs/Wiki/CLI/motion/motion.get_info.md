# motion.get_info

Overview
==

- Get metadata for a motion: total_length, loop_length, rate_scale, blend_out_time, sections (with names, start times, loop flags, next-section transitions), and the playing component (Root/Head/Hair). The character context (entity_id) determines which montage row is matched based on gender/age/posture.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Motion Info |
| Category | `motion` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `MotionGetInfo` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| anim_id | name | yes | — | Animation ID (from motion.list) |
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('motion.get_info', {
  anim_id: '',
  entity_id: 0, // optional
});
```