# visual.show_zoi_info

Overview
==

- Toggles on-screen Zoi debug information.

Metadata
==

| Field | Value |
|---|---|
| Display | Show Zoi Info |
| Category | `visual` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ShowZoiInfo` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Show or hide Zoi info |

Usage
==

```js
await inzoi.cli.execute('visual.show_zoi_info', {
  enable: false,
});
```