# environment.control_disaster

Overview
==

- Triggers or controls a disaster by id.

Metadata
==

| Field | Value |
|---|---|
| Display | Control Disaster |
| Category | `environment` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ControlDisaster`, `world.control_disaster` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| disaster | name | yes | — | Disaster id |

Usage
==

```js
await inzoi.cli.execute('environment.control_disaster', {
  disaster: '',
});
```