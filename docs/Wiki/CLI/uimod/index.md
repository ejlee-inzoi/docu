# uimod

Overview
==

- 12 commands in this category.

Commands
==

| Command | Name | Description |
|---|---|---|
| [`uimod.apps`](uimod.apps.md) | List Multi-App Config | Shows all apps in a multi-app mod with enabled/mounted status. |
| [`uimod.cfg_load`](uimod.cfg_load.md) | Load Config Value | Loads a value (or all keys in a section) from the mod's cfg directory. |
| [`uimod.cfg_save`](uimod.cfg_save.md) | Save Config Value | Saves a value to a file under the mod's cfg directory. |
| [`uimod.enable`](uimod.enable.md) | Enable Disabled UI-Only Mod | Finds a disabled UI-only mod by keyword (name or friendly name) and mounts it at runtime. Also sets… |
| [`uimod.focus`](uimod.focus.md) | Focus UI Mod | Brings a UI mod view to the Z-Order front so it renders above other mod views. |
| [`uimod.list`](uimod.list.md) | List Mounted UI Mods | Returns a JSON array of all currently mounted UI mods with parent grouping. |
| [`uimod.list_disabled`](uimod.list_disabled.md) | List Disabled UI-Only Mods | Lists installed mods that are disabled (bEnable=false) and contain only UI content (no PAK/assets).… |
| [`uimod.mount`](uimod.mount.md) | Mount User Mod | Mount a UI mod from Documents/inZOI/Mods/{mod_id} (or Mods/InGame/{mod_id}). |
| [`uimod.remount`](uimod.remount.md) | Remount User Mod | Unmount then re-mount a UI mod from Documents/inZOI/Mods/. Use after editing mod files to apply cha… |
| [`uimod.set_app`](uimod.set_app.md) | Set App Enabled | Enable or disable a specific app in a multi-app mod. Saves to uimod_apps.json and reloads if mounte… |
| [`uimod.unmount`](uimod.unmount.md) | Unmount Mod | Unmount a currently mounted UI mod by mod_id. |
| [`uimod.unmount_all`](uimod.unmount_all.md) | Unmount All UI Mods | Unmounts every currently mounted UI mod. |

