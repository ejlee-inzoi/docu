# quality_of_life.auto_utility_bills

Overview
==

- Toggles automatic utility bill handling.

Metadata
==

| Field | Value |
|---|---|
| Display | Auto Utility Bills |
| Category | `quality_of_life` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `AutoUtilityBills`, `economy.auto_utility_bills` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | True to enable auto bills |

Usage
==

```js
await inzoi.cli.execute('quality_of_life.auto_utility_bills', {
  enable: false,
});
```