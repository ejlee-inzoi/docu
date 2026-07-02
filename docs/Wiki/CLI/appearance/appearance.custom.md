# appearance.custom

Overview
==

- Open custom Zoi flow for the given entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Custom Zoi |
| Category | `appearance` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `CustomZoi`, `zoi.custom` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('appearance.custom', {
  entity_id: 0, // optional
});
```