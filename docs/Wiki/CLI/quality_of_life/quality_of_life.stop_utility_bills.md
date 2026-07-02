# quality_of_life.stop_utility_bills

Overview
==

- Stops or resumes utility bills when enabled or disabled.

Metadata
==

| Field | Value |
|---|---|
| Display | Stop Utility Bills |
| Category | `quality_of_life` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `StopUtilityBills`, `economy.stop_utility_bills` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | True to stop utility bills |

Usage
==

```js
await inzoi.cli.execute('quality_of_life.stop_utility_bills', {
  enable: false,
});
```