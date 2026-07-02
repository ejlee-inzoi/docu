# motion.play_random

Overview
==

- Pick a random motion matching the filter and play it on the target Zoi. Only motions playable by the character (gender/age/posture compatible) are considered. filter is required to constrain the candidate set (e.g. filter=dance).

Metadata
==

| Field | Value |
|---|---|
| Display | Play Random Motion |
| Category | `motion` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `MotionPlayRandom` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| filter | string | yes | — | Keyword filter for candidate selection (required, e.g. dance) |
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| section | name | no | — | Start section (default: Default) |
| position | float | no | — | Start position in seconds (default: 0.0) |

Usage
==

```js
await inzoi.cli.execute('motion.play_random', {
  filter: '',
  entity_id: 0, // optional
  section: '', // optional
  position: 0.0, // optional
});
```