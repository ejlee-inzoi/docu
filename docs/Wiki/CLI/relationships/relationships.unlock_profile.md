# relationships.unlock_profile

Overview
==

- Unlock profile for the given entity.

Metadata
==

| Field | Value |
|---|---|
| Display | Unlock Profile |
| Category | `relationships` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `UnlockProfile`, `relationship.unlock_profile` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | yes | — | Target entity id |

Usage
==

```js
await inzoi.cli.execute('relationships.unlock_profile', {
  entity_id: 0,
});
```