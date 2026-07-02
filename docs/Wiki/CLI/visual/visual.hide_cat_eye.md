# visual.hide_cat_eye

Overview
==

- Hides the cat eye camera overlay.

Metadata
==

| Field | Value |
|---|---|
| Display | Hide Cat Eye |
| Category | `visual` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `HideCatEye` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Hide or show the overlay |

Usage
==

```js
await inzoi.cli.execute('visual.hide_cat_eye', {
  enable: false,
});
```