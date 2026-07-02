# status_and_health.add_illness

Overview
==

- Adds the specified illness to the current character.

Metadata
==

| Field | Value |
|---|---|
| Display | Add Illness |
| Category | `status_and_health` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `AddIllness`, `health.add_illness` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| illness_id | name | yes | — | Illness ID to add |

Usage
==

```js
await inzoi.cli.execute('status_and_health.add_illness', {
  entity_id: 0, // optional
  illness_id: '',
});
```