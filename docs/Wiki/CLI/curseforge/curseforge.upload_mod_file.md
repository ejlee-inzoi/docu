# curseforge.upload_mod_file

Overview
==

- Upload a mod folder to CurseForge. Reads the .uplugin to find CfUgcId; if absent, this command first creates the mod entry on CurseForge (requires --thumbnail, --class_id, --category_id), updates the .uplugin with the returned id/url, then proceeds. The plugin folder is zipped via cfcore Compression and uploaded chunked. All progress is reported via toasts.

Metadata
==

| Field | Value |
|---|---|
| Display | CurseForge Upload Mod File |
| Category | `curseforge` |
| Access | `ScriptCheat` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| plugin_dir | string | yes | — | Mod folder name or absolute path. If not absolute, searched under Documents/inZOI/Mods/InGame, /InGame, /Mods in that order. |
| changelog | string | no | — | Changelog text for this version. |
| thumbnail | string | no | — | Absolute path to thumbnail PNG (>=400x400). Required if .uplugin has no CfUgcId. |
| class_id | int | no | 0 | CurseForge class id (integer). Highest priority when class_id>0 and category_id>0. |
| category_id | int | no | 0 | CurseForge primary category id (integer). Highest priority when class_id>0 and category_id>0. |
| class_name | string | no | — | CurseForge class name (e.g. "Overlay UI"). Used when class_id is 0. Resolved by name from cfcore GetCategories. |
| category_name | string | no | — | CurseForge category name (e.g. "General"). Used when category_id is 0. Resolved by name from cfcore GetCategories. |

Usage
==

```js
await inzoi.cli.execute('curseforge.upload_mod_file', {
  plugin_dir: '',
  changelog: '', // optional
  thumbnail: '', // optional
  class_id: 0, // optional
  category_id: 0, // optional
  class_name: '', // optional
  category_name: '', // optional
});
```