# entity.possess

Overview
==

- Switches the controlled character to the specified entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Possess Character |
| Category | `entity` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Character to possess |

Usage
==

```js
await inzoi.cli.execute('entity.possess', {
  entity_id: 0,
});
```