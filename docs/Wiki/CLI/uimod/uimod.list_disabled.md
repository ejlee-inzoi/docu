# uimod.list_disabled

Overview
==

- Lists installed mods that are disabled (bEnable=false) and contain only UI content (no PAK/assets). These can be enabled at runtime via uimod.enable.

Metadata
==

| Field | Value |
|---|---|
| Display | List Disabled UI-Only Mods |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

- This command takes no parameters.

Usage
==

```js
await inzoi.cli.execute('uimod.list_disabled');
```