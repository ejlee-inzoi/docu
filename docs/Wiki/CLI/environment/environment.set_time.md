# environment.set_time

Overview
==

- Jumps to a specific in-game time. With only hour/minute it moves to the next occurrence (forward). With 'day' it jumps to that absolute in-game day index (see environment.get_state).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Time |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `world.set_time` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| day | int | no | — | Absolute in-game day index to jump to |
| hour | int | no | — | Target hour [0-23] |
| minute | int | no | — | Target minute [0-59] |
| allow_rewind | bool | no | false | Allow jumping backward in time |

Usage
==

```js
await inzoi.cli.execute('environment.set_time', {
  day: 0, // optional
  hour: 0, // optional
  minute: 0, // optional
  allow_rewind: false, // optional
});
```