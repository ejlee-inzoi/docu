# currency.add_money

Overview
==

- Adds the given amount of money to the current household.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Money |
| Category | `currency` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `AddMoney`, `economy.add_money` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| amount | int | yes | — | Amount to add |

Usage
==

```js
await inzoi.cli.execute('currency.add_money', {
  amount: 0,
});
```