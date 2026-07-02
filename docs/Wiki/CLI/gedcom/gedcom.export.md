# gedcom.export

Overview
==

- Export current simulation's families and characters to a GEDCOM 7.0 file. Static snapshot of names/sex/birth_day/death_status. Marriage/divorce/death dates are NOT preserved by inZOI and are emitted as NOTE.

Metadata
==

| Field | Value |
|---|---|
| Display | GEDCOM Export |
| Category | `gedcom` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| output_path | string | no | — | Absolute path to a .ged file, OR a directory (a file inzoi_gedcom_<timestamp>.ged is auto-created inside it). A value without a .ged extension, ending with a separator, or naming an existing folder is treated as a directory. Default: Documents/inZOI/ged/inzoi_gedcom_<timestamp>.ged. Missing directories are created. |
| household_id | int | no | 0 | Specific household id to export. 0 = export all. |
| first_name | string | no | — | MCCC-style root character first name. first_name and/or last_name selects the first matching character as root and exports only the connected family graph reachable from that character (ancestors, descendants, spouses, siblings). Either field alone is sufficient; if both are empty, all characters are exported. |
| last_name | string | no | — | MCCC-style root character last name. Optional; can be used alone or together with first_name to disambiguate the root character. |
| portrait_dir | string | no | — | Optional absolute path to a save-game Portrait/ folder. If omitted, auto-resolves to the most-recently-modified Portrait folder under Documents/InZOI/SaveGames* and copies <entity_id>.png next to the .ged file. |
| include_npc | bool | no | false | Reserved (currently no-op; all characters exported). Phase 2 will filter background NPCs. |

Usage
==

```js
await inzoi.cli.execute('gedcom.export', {
  output_path: '', // optional
  household_id: 0, // optional
  first_name: '', // optional
  last_name: '', // optional
  portrait_dir: '', // optional
  include_npc: false, // optional
});
```