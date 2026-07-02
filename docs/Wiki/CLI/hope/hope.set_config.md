# hope.set_config

Overview
==

- Sets the GLOBAL hope generation config (units: seconds). Affects all characters. random_select_cooltime controls auto-select cadence; auto_select_hope_limit/max_hope_size control how many hopes fill. (RefreshInterval/RandomSelectRangeSec are non-functional and intentionally not exposed.)

Metadata
==

| Field | Value |
|---|---|
| Display | Set Hope Config |
| Category | `hope` |
| Access | `ScriptCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| max_hope_size | int | no | — | Max simultaneous hope slots |
| auto_select_hope_limit | int | no | — | Max hopes auto-filled by the system |
| random_select_cooltime | int | no | — | Seconds between auto-selects (generation cadence) |
| deselect_cooltime | int | no | — | Default hope lifetime/expiry in seconds |
| reselect_cooltime | int | no | — | Seconds before a used hope can be re-selected |

Usage
==

```js
await inzoi.cli.execute('hope.set_config', {
  max_hope_size: 0, // optional
  auto_select_hope_limit: 0, // optional
  random_select_cooltime: 0, // optional
  deselect_cooltime: 0, // optional
  reselect_cooltime: 0, // optional
});
```