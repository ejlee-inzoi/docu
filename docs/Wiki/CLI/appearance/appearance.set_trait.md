# appearance.set_trait

Overview
==

- Set personality and two characteristic traits for a Zoi.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Trait |
| Category | `appearance` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetTrait`, `zoi.set_trait` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| personality | name | yes | — | Personality id |
| char1 | name | yes | — | First characteristic id |
| char2 | name | yes | — | Second characteristic id |

Usage
==

```js
await inzoi.cli.execute('appearance.set_trait', {
  entity_id: 0, // optional
  personality: '',
  char1: '',
  char2: '',
});
```