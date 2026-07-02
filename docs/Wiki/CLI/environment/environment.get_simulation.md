# environment.get_simulation

Overview
==

- Returns time simulation state: speed, pause status, real-seconds-per-game-minute ratio.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Simulation Info |
| Category | `environment` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `world.get_simulation` |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('environment.get_simulation');
```