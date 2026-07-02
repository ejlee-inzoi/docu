# uimod.apps

Overview
==

- Shows all apps in a multi-app mod with enabled/mounted status.

Metadata
==

| Field | Value |
|---|---|
| Display | List Multi-App Config |
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

Usage
==

```js
await inzoi.cli.execute('uimod.apps', {
  mod_id: '',
});
```