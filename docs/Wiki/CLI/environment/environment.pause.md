# environment.pause

Overview
==

- Pauses (no argument) or resumes the game simulation while preserving current time speed. Use enable=false to resume.

Metadata
==

| Field | Value |
|---|---|
| Display | Pause Simulation |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `PauseSimulation`, `world.pause` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | no | true | true to pause (default), false to resume |

Usage
==

```js
await inzoi.cli.execute('environment.pause', {
  enable: true, // optional
});
```