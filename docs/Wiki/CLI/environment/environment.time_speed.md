# environment.time_speed

Overview
==

- Sets the global time speed multiplier.

Metadata
==

| Field | Value |
|---|---|
| Display | Time Speed |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `TimeSpeed`, `world.time_speed` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| speed | float | yes | — | Time speed multiplier [0-30] |

Usage
==

```js
await inzoi.cli.execute('environment.time_speed', {
  speed: 0.0,
});
```