# uimod.enable

Overview
==

- Finds a disabled UI-only mod by keyword (name or friendly name) and mounts it at runtime. Also sets bEnable=true in manifest for persistence. Use uimod.list_disabled to see available mods.

Metadata
==

| Field | Value |
|---|---|
| Display | Enable Disabled UI-Only Mod |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| keyword | string | yes | — | Mod name or friendly name (partial match) |

Usage
==

```js
await inzoi.cli.execute('uimod.enable', {
  keyword: '',
});
```