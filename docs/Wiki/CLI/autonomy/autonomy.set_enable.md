# autonomy.set_enable

Overview
==

- Get or set the autonomy (free will) enabled state for a character.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Autonomy Enable |
| Category | `autonomy` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| enable | bool | no | — | true to enable, false to disable (omit to query) |

Usage
==

```js
await inzoi.cli.execute('autonomy.set_enable', {
  entity_id: 0, // optional
  enable: false, // optional
});
```