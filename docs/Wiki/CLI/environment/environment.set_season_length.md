# environment.set_season_length

Overview
==

- Sets how many days each season lasts. Allowed values: 7, 14, 21, 28.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Season Length |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetSeasonLength`, `world.set_season_length` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| length | int | yes | — | Season length in days (7, 14, 21, or 28) |

Usage
==

```js
await inzoi.cli.execute('environment.set_season_length', {
  length: 0,
});
```