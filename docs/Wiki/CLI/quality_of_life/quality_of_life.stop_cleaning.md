# quality_of_life.stop_cleaning

Overview
==

- Toggles whether household cleaning tasks run.

Metadata
==

| Field | Value |
|---|---|
| Display | Stop Cleaning |
| Category | `quality_of_life` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `StopCleaning`, `household.stop_cleaning` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Enable or disable stopping cleaning |

Usage
==

```js
await inzoi.cli.execute('quality_of_life.stop_cleaning', {
  enable: false,
});
```