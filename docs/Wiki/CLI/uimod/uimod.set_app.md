# uimod.set_app

Overview
==

- Enable or disable a specific app in a multi-app mod. Saves to uimod_apps.json and reloads if mounted.

Metadata
==

| Field | Value |
|---|---|
| Display | Set App Enabled |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| mod_id | string | yes | — | Parent mod ID (e.g. DevTools) |
| app | string | yes | — | App folder name (e.g. AnalogClock) |
| enabled | bool | yes | — | true to enable, false to disable |

Usage
==

```js
await inzoi.cli.execute('uimod.set_app', {
  mod_id: '',
  app: '',
  enabled: false,
});
```