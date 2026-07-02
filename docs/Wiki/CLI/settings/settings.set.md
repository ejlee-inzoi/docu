# settings.set

Overview
==

- Set any game setting by its EB1GameOption enum name and value. Applies immediately. Use settings.get to check current values. Examples: settings.set --option MaxFPS --value 60, settings.set --option Brightness --value 70.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Setting |
| Category | `settings` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| option | string | yes | — | EB1GameOption enum name (e.g. MaxFPS, Brightness, UISize) |
| value | string | yes | — | Value to set |

Usage
==

```js
await inzoi.cli.execute('settings.set', {
  option: '',
  value: '',
});
```