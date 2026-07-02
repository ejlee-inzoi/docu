# entity.set_scale

Overview
==

- Scale the character: skeletal mesh, capsule (half-height + radius), B2 HalfHeight, and MaxWalkSpeed are all scaled together. Speed uses sqrt curve for gentle falloff. NavMesh agent size is unchanged (navigation still works). When targeting the possessed Zoi (no entity_id), smart-mode cameras (QuarterView / ShoulderView) are also scaled. action=get: returns mesh scale, walk speed, camera scale, capsule half-height and radius. action=set scale=<f>: applies full scale (0.05~5.0). action=reset: restores all scaled values to their originals.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Entity Scale |
| Category | `entity` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `EntitySetScale` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| action | string | no | get | get (default), set, or reset |
| scale | float | no | — | Uniform scale factor: 0.05 (tiny) ~ 5.0 (giant) |

Usage
==

```js
await inzoi.cli.execute('entity.set_scale', {
  entity_id: 0, // optional
  action: 'get', // optional
  scale: 0.0, // optional
});
```