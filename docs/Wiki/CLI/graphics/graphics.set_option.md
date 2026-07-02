# graphics.set_option

Overview
==

- Set an individual graphics option. Use graphics.get_settings to see current values. Common options: shadow_quality, texture_quality, view_distance, max_fps, vsync, screen_percentage. Quality values are typically 0-4 (0=lowest, 4=highest).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Graphics Option |
| Category | `graphics` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| option | string | yes | — | Option name (e.g. shadow_quality, texture_quality, max_fps) |
| value | string | yes | — | Value to set (e.g. 0, 1, 2, 3, 4 for quality; 30, 60, 120 for FPS) |

Usage
==

```js
await inzoi.cli.execute('graphics.set_option', {
  option: '',
  value: '',
});
```