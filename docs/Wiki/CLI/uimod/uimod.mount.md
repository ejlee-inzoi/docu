# uimod.mount

Overview
==

- Mount a UI mod from Documents/inZOI/Mods/{mod_id} (or Mods/InGame/{mod_id}).

Metadata
==

| Field | Value |
|---|---|
| Display | Mount User Mod |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| mod_id | string | yes | — | Mod folder name under Documents/inZOI/Mods/ |

Usage
==

```js
await inzoi.cli.execute('uimod.mount', {
  mod_id: '',
});
```