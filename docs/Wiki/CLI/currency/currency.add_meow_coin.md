# currency.add_meow_coin

Overview
==

- Adds the given amount of meow coins.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Meow Coin |
| Category | `currency` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `AddMeowCoin`, `economy.add_meow_coin` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| amount | int | yes | — | Amount to add |

Usage
==

```js
await inzoi.cli.execute('currency.add_meow_coin', {
  amount: 0,
});
```