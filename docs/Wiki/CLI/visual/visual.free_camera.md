# visual.free_camera

Overview
==

- Toggles free camera cheat mode.

Metadata
==

| Field | Value |
|---|---|
| Display | Free Camera |
| Category | `visual` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `EnableFreeCamera` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Enable or disable free camera |

Usage
==

```js
await inzoi.cli.execute('visual.free_camera', {
  enable: false,
});
```