# motion.play

Overview
==

- Play a character animation on the target Zoi. anim_id: CharacterAnim row name (use motion.list to find). section: start section name (Default/Loop/End or motion-specific; default: Default).   Use motion.get_info to see valid sections for a motion. position: start position in seconds within the section (default: 0.0). The animation interrupts the current motion. Use motion.stop to stop.

Metadata
==

| Field | Value |
|---|---|
| Display | Play Motion |
| Category | `motion` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `MotionPlay` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| anim_id | name | yes | — | Animation ID to play (from motion.list) |
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| section | name | no | — | Start section (Default/Loop/End, default: Default) |
| position | float | no | — | Start position within section in seconds (default: 0.0) |

Usage
==

```js
await inzoi.cli.execute('motion.play', {
  anim_id: '',
  entity_id: 0, // optional
  section: '', // optional
  position: 0.0, // optional
});
```