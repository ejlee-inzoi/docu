# simulation.set_density

Overview
==

- Set an individual density level for a simulation category. Kinds: population (0-10), biz_customer (0-10), vehicle (0-10), animal (0-5). Changing a density automatically switches preset to Custom.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Simulation Density |
| Category | `simulation` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| kind | string | yes | — | Density kind: population, biz_customer, vehicle, animal |
| value | int | yes | — | Density level (0-10 for most, 0-5 for animal) |

Usage
==

```js
await inzoi.cli.execute('simulation.set_density', {
  kind: '',
  value: 0,
});
```