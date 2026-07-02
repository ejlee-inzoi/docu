# uimod.cfg_load

Overview
==

- Loads a value (or all keys in a section) from the mod's cfg directory.

Metadata
==

| Field | Value |
|---|---|
| Display | Load Config Value |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| mod_id | string | yes | — | Mod identifier |
| section | string | yes | — | Section (subdirectory) |
| key | string | no | — | Key (omit to load entire section) |

Usage
==

```js
await inzoi.cli.execute('uimod.cfg_load', {
  mod_id: '',
  section: '',
  key: '', // optional
});
```