# motion.stop

Overview
==

- Stop a playing animation on the target Zoi. Omit anim_id to stop all currently playing motions.

Metadata
==

| Field | Value |
|---|---|
| Display | Stop Motion |
| Category | `motion` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `MotionStop` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| anim_id | name | no | — | Animation ID to stop (omit to stop all) |

Usage
==

```js
await inzoi.cli.execute('motion.stop', {
  entity_id: 0, // optional
  anim_id: '', // optional
});
```