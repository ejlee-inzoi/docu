# world.list_characters

Overview
==

- Returns all characters in the simulation world with pagination. Supports filtering by group type and alive status.

Metadata
==

| Field | Value |
|---|---|
| Display | List World Characters |
| Category | `world` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| group_type | string | no | — | Filter by group type: ResidenceFamily, CompanyRoleNpc, SiteRoleNpc, Crowd, EventCrowd, ServiceNpc, StaticNpc, ShopNpc |
| limit | int | no | — | Max characters to return (default: 50) |
| offset | int | no | — | Skip first N matched characters (default: 0) |
| alive_only | bool | no | — | Exclude dead characters (default: true) |

Usage
==

```js
await inzoi.cli.execute('world.list_characters', {
  group_type: '', // optional
  limit: 0, // optional
  offset: 0, // optional
  alive_only: false, // optional
});
```