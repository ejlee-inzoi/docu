# gameplay.set_autosave

Overview
==

- Enable/disable autosave and set the interval. Both parameters are optional; only specified ones are changed.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Autosave |
| Category | `gameplay` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | no | — | Enable or disable autosave |
| interval | int | no | — | Autosave interval in minutes |

Usage
==

```js
await inzoi.cli.execute('gameplay.set_autosave', {
  enable: false, // optional
  interval: 0, // optional
});
```