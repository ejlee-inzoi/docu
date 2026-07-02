# uimod.cfg_save

Overview
==

- Saves a value to a file under the mod's cfg directory.

Metadata
==

| Field | Value |
|---|---|
| Display | Save Config Value |
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
| key | string | yes | — | Key (filename without extension) |
| value | string | yes | — | Value to store |

Usage
==

```js
await inzoi.cli.execute('uimod.cfg_save', {
  mod_id: '',
  section: '',
  key: '',
  value: '',
});
```