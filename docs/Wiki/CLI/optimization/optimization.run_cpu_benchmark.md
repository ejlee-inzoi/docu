# optimization.run_cpu_benchmark

Overview
==

- Run a hardware benchmark and return the CPU-recommended simulation preset without changing settings. Pass apply=true to apply the recommended preset (analogous to simulation.optimize but forces a fresh benchmark).

Metadata
==

| Field | Value |
|---|---|
| Display | Run CPU Benchmark |
| Category | `optimization` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| apply | bool | no | — | Apply the recommended simulation preset (default: false) |

Usage
==

```js
await inzoi.cli.execute('optimization.run_cpu_benchmark', {
  apply: false, // optional
});
```