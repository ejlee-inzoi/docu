# movement.set_speed

Overview
==

- Get, set, or reset MaxWalkSpeed (cm/s). Default walk=190, sprint=400. action=get: returns current and default values. action=set speed=<f>: sets MaxWalkSpeed directly (1~2000 cm/s). action=reset: restores to default walk speed (190).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Movement Speed |
| Category | `movement` |
| Access | `UserCheat` |
| Scope | `B1Multicast` |
| Tags | — |
| Aliases | `SetMovementSpeed` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| action | string | no | get | get (default), set, or reset |
| speed | float | no | — | Walk speed in cm/s (1~2000). 190=default walk, 400=default sprint. |

Usage
==

```js
await inzoi.cli.execute('movement.set_speed', {
  entity_id: 0, // optional
  action: 'get', // optional
  speed: 0.0, // optional
});
```