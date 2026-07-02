# building.show_studio_category

Overview
==

- Toggles studio build category visibility in the UI.

Metadata
==

| Field | Value |
|---|---|
| Display | Show Studio Category |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ShowStudioCategory` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Show or hide studio category |

Usage
==

```js
await inzoi.cli.execute('building.show_studio_category', {
  enable: false,
});
```