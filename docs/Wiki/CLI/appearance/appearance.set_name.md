# appearance.set_name

Overview
==

- Set first and last name for a Zoi.

Metadata
==

| Field | Value |
|---|---|
| Display | Set Zoi Name |
| Category | `appearance` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `setZoiName`, `zoi.set_name` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| first_name | string | yes | — | First name |
| last_name | string | yes | — | Last name |

Usage
==

```js
await inzoi.cli.execute('appearance.set_name', {
  entity_id: 0, // optional
  first_name: '',
  last_name: '',
});
```