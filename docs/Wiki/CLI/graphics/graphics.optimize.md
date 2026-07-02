# graphics.optimize

Overview
==

- Run the in-game Graphics Auto Detect flow. Picks the optimal preset from the GPU preset table when available, otherwise runs a hardware benchmark, then applies any device-specific overrides.

Metadata
==

| Field | Value |
|---|---|
| Display | Optimize Graphics |
| Category | `graphics` |
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
await inzoi.cli.execute('graphics.optimize');
```