# movement.reset_zoi

Overview
==

- Force-recovers a stuck/bugged character: clears current+queued interactions, stops action/anim, resets movement/path, releases grab, clears buffs, disembarks vehicle. By default also teleports to a safe spawn (home/nearest spawner); pass teleport=false to reset in place. Pass gated=true to use the player-facing rescue instead (gates infant/dying, fade/toast, deferred).

Metadata
==

| Field | Value |
|---|---|
| Display | Reset Zoi |
| Category | `movement` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ResetZoi` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| teleport | bool | no | true | Also teleport to a safe spawn (default: true; ignored if gated) |
| gated | bool | no | false | Use the player-facing rescue (gates infant/dying, fade/toast, deferred). Overrides teleport. |

Usage
==

```js
await inzoi.cli.execute('movement.reset_zoi', {
  entity_id: 0, // optional
  teleport: true, // optional
  gated: false, // optional
});
```