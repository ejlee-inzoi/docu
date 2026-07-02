# uimod.unmount

Overview
==

- Unmount a currently mounted UI mod by mod_id.

Metadata
==

| Field | Value |
|---|---|
| Display | Unmount Mod |
| Category | `uimod` |
| Access | `Public` |
| Scope | `B1Standalone` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| mod_id | string | yes | — | Mod ID to unmount |

Usage
==

```js
await inzoi.cli.execute('uimod.unmount', {
  mod_id: '',
});
```