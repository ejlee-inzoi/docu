# pregnancy_and_birth.hello_my_angel

Overview
==

- Instantly delivers the baby.

Metadata
==

| Field | Value |
|---|---|
| Display | Hello My Angel |
| Category | `pregnancy_and_birth` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `HelloMyAngel`, `health.hello_my_angel` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |

Usage
==

```js
await inzoi.cli.execute('pregnancy_and_birth.hello_my_angel', {
  entity_id: 0, // optional
});
```