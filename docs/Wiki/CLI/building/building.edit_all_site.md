# building.edit_all_site

Overview
==

- Toggles cheat that allows editing all site areas.

Metadata
==

| Field | Value |
|---|---|
| Display | Edit All Site |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `EditAllSite` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Enable or disable edit-all-site |

Usage
==

```js
await inzoi.cli.execute('building.edit_all_site', {
  enable: false,
});
```