# camera.set_fov

Overview
==

- Set the camera field of view angle. Typical range: 60-120.

Metadata
==

| Field | Value |
|---|---|
| Display | Set FOV |
| Category | `camera` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| value | string | yes | — | FOV value (e.g. 90) |

Usage
==

```js
await inzoi.cli.execute('camera.set_fov', {
  value: '',
});
```