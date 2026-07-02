# cleaning.freeze_cleanliness

Overview
==

- Freezes cleanliness values so they no longer change.

Metadata
==

| Field | Value |
|---|---|
| Display | Freeze Cleanliness |
| Category | `cleaning` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `FreezeCleanliness`, `household.freeze_cleanliness` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Enable or disable cleanliness freeze |

Usage
==

```js
await inzoi.cli.execute('cleaning.freeze_cleanliness', {
  enable: false,
});
```