# camera.set_sensitivity

Overview
==

- Set the follow-view camera mouse sensitivity. Range: 0-100.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Mouse Sensitivity |
| Category | `camera` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | string | yes | — | Sensitivity value (0-100) |

Usage
==

```js
await inzoi.cli.execute('camera.set_sensitivity', {
  value: '',
});
```