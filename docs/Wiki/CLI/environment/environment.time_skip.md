# environment.time_skip

Overview
==

- Skips game time forward by the given days/hours/minutes.

Metadata
==

| Field | Value |
|---|---|
| Display | Time Skip |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `world.time_skip` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| days | int | no | — | Days to skip forward |
| hours | int | no | — | Hours to skip forward |
| minutes | int | no | — | Minutes to skip forward |

Usage
==

```js
await inzoi.cli.execute('environment.time_skip', {
  days: 0, // optional
  hours: 0, // optional
  minutes: 0, // optional
});
```