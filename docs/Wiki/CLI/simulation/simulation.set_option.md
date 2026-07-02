# simulation.set_option

Overview
==

- Set an individual simulation option. Use simulation.get_settings to see current values. Options accept: density levels as int (0-10 or 0-5), on/off toggles as 0/1, temperature_effect as 0 (off) / 1 (moderate) / 2 (standard).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Simulation Option |
| Category | `simulation` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| option | string | yes | — | Option name (see simulation.get_settings for keys) |
| value | string | yes | — | Value (int for density/enum, 0/1 for toggles) |

Usage
==

```js
await inzoi.cli.execute('simulation.set_option', {
  option: '',
  value: '',
});
```