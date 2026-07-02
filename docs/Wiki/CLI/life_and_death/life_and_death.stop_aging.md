# life_and_death.stop_aging

Overview
==

- Toggle aging stop for the possessed Zoi.

Metadata
==

| Field | Value |
|---|---|
| Display | Stop Aging |
| Category | `life_and_death` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `StopAging`, `zoi.stop_aging` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| enable | bool | yes | — | Stop aging when true |

Usage
==

```js
await inzoi.cli.execute('life_and_death.stop_aging', {
  entity_id: 0, // optional
  enable: false,
});
```