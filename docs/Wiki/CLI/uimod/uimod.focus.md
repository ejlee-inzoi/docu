# uimod.focus

Overview
==

- Brings a UI mod view to the Z-Order front so it renders above other mod views.

Metadata
==

| Field | Value |
|---|---|
| Display | Focus UI Mod |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| mod_id | string | yes | — | Mod ID to bring to front |

Usage
==

```js
await inzoi.cli.execute('uimod.focus', {
  mod_id: '',
});
```