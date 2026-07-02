# settings.get

Overview
==

- Get any game setting by its EB1GameOption enum name (e.g. ShadowQuality, MasterSoundVolume, Language, EnableAutoSave, FOV). Use this for settings not covered by domain-specific commands.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Setting |
| Category | `settings` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| option | string | yes | — | EB1GameOption enum name (e.g. ShadowQuality, MasterSoundVolume) |

Usage
==

```js
await inzoi.cli.execute('settings.get', {
  option: '',
});
```