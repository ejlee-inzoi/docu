# currency.add_resort_coin

Overview
==

- Adds the given amount of resort coins.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Resort Coin |
| Category | `currency` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `AddResortCoin`, `economy.add_resort_coin` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| amount | int | yes | — | Amount to add |

Usage
==

```js
await inzoi.cli.execute('currency.add_resort_coin', {
  amount: 0,
});
```