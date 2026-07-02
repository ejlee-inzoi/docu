# visual.hide_fx

Overview
==

- Hides all visual effects in the game.

Metadata
==

| Field | Value |
|---|---|
| Display | Hide FX |
| Category | `visual` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `HideFX` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| enable | bool | yes | — | Hide or show effects |

Usage
==

```js
await inzoi.cli.execute('visual.hide_fx', {
  enable: false,
});
```