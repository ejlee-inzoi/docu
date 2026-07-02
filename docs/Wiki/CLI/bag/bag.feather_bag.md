# bag.feather_bag

Overview
==

- Toggles weightless inventory cheat.

Metadata
==

| Field | Value |
|---|---|
| Display | Feather Bag |
| Category | `bag` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `FeatherBag`, `household.feather_bag` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Enable weightless inventory |

Usage
==

```js
await inzoi.cli.execute('bag.feather_bag', {
  enable: false,
});
```