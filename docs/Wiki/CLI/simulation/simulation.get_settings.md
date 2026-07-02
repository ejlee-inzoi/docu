# simulation.get_settings

Overview
==

- Returns current simulation settings: preset, population/business/vehicle/animal density, disaster/ghost toggles, temperature effect, costume variety.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Simulation Settings |
| Category | `simulation` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('simulation.get_settings');
```