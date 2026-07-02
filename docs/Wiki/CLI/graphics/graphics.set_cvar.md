# graphics.set_cvar

Overview
==

- Get or set an Unreal Engine console variable directly. If value is omitted, returns the current value. Examples: r.ScreenPercentage, sg.ShadowQuality, r.VSync.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Console Variable |
| Category | `graphics` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | Experimental |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | yes | — | Console variable name (e.g. r.ScreenPercentage) |
| value | string | no | — | Value to set (omit to read current value) |

Usage
==

```js
await inzoi.cli.execute('graphics.set_cvar', {
  name: '',
  value: '', // optional
});
```