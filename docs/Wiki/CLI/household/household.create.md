# household.create

Overview
==

- Creates a new empty household with the given name. Use household.add_member to populate it.

Metadata
==

| Field | Value |
|---|---|
| Display | Create Household |
| Category | `household` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| name | string | yes | — | Household display name |

Usage
==

```js
await inzoi.cli.execute('household.create', {
  name: '',
});
```