# uimod.remount

Overview
==

- Unmount then re-mount a UI mod from Documents/inZOI/Mods/. Use after editing mod files to apply changes.

Metadata
==

| Field | Value |
|---|---|
| Display | Remount User Mod |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| mod_id | string | yes | — | Mod folder name |

Usage
==

```js
await inzoi.cli.execute('uimod.remount', {
  mod_id: '',
});
```