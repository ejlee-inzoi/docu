# building.show_user_dev_category

Overview
==

- Toggles user dev build category visibility in the UI.

Metadata
==

| Field | Value |
|---|---|
| Display | Show User Dev Category |
| Category | `building` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ShowUserDevCategory` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Show or hide user dev category |

Usage
==

```js
await inzoi.cli.execute('building.show_user_dev_category', {
  enable: false,
});
```