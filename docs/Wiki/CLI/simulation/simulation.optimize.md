# simulation.optimize

Overview
==

- Run CPU benchmark (if not cached) and apply the CPU-recommended simulation preset. CPU-Z lookup is tried first, falls back to Unreal's hardware benchmark. Ultra is never auto-selected (engine policy — High is the auto max).

Metadata
==

| Field | Value |
|---|---|
| Display | Optimize Simulation |
| Category | `simulation` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('simulation.optimize');
```