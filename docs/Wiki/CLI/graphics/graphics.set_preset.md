# graphics.set_preset

Overview
==

- Set graphics quality preset. Options: minimum, verylow, low, normal (medium), high, cinematic (ultra). Applies all quality settings at once.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Graphics Preset |
| Category | `graphics` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| preset | string | yes | — | Preset name: minimum, verylow, low, normal, high, cinematic |

Usage
==

```js
await inzoi.cli.execute('graphics.set_preset', {
  preset: '',
});
```