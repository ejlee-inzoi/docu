# environment.change_season

Overview
==

- Switches the world to the named season.

Metadata
==

| Field | Value |
|---|---|
| Display | Change Season |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ChangeSeason`, `world.change_season` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| season | string | yes | — | Season name |

Usage
==

```js
await inzoi.cli.execute('environment.change_season', {
  season: '',
});
```