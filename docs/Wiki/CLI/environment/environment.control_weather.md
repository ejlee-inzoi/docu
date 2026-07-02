# environment.control_weather

Overview
==

- Advances or adjusts weather by type and step.

Metadata
==

| Field | Value |
|---|---|
| Display | Control Weather |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ControlWeather`, `world.control_weather` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| weather | string | yes | — | Weather identifier |
| step | int | yes | — | Weather control step |

Usage
==

```js
await inzoi.cli.execute('environment.control_weather', {
  weather: '',
  step: 0,
});
```