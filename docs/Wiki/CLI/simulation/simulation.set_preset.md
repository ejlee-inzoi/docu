# simulation.set_preset

Overview
==

- Set simulation quality preset. Options: minimum, verylow, low, normal (medium), high, ultra, custom. Applies all density levels and related simulation settings at once.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Simulation Preset |
| Category | `simulation` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| preset | string | yes | — | Preset name: minimum, verylow, low, normal, high, ultra, custom |

Usage
==

```js
await inzoi.cli.execute('simulation.set_preset', {
  preset: '',
});
```