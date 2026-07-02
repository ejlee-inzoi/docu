# life_and_death.immortal

Overview
==

- Toggle immortality for Zoi.

Metadata
==

| Field | Value |
|---|---|
| Display | Immortal Zoi |
| Category | `life_and_death` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `ImmortalZoi`, `zoi.immortal` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| enable | bool | yes | — | Enable immortality |

Usage
==

```js
await inzoi.cli.execute('life_and_death.immortal', {
  entity_id: 0, // optional
  enable: false,
});
```