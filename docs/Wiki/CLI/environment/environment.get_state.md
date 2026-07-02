# environment.get_state

Overview
==

- Returns current in-game environment state: time, day of week, season, weather, temperature, disaster, calendar event.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Environment State |
| Category | `environment` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `environment.get_info`, `world.get_state` |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('environment.get_state');
```