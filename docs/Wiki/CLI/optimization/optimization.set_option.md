# optimization.set_option

Overview
==

- Set an individual optimization option. optimize_autonomy: 0 or 1. performance_safeguard: 0 (off) or 1 (on). slod_view_level: 0-5 (0=nearest, 5=farthest).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Optimization Option |
| Category | `optimization` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| option | string | yes | — | Option name: optimize_autonomy, performance_safeguard, slod_view_level |
| value | string | yes | — | Value (0/1 for toggles, 0-5 for slod_view_level) |

Usage
==

```js
await inzoi.cli.execute('optimization.set_option', {
  option: '',
  value: '',
});
```