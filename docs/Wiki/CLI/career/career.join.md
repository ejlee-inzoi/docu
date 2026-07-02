# career.join

Overview
==

- Assigns the character to a specific career/job (use career.list_openings to get valid career_entity_id/job_id).

Metadata
==

| Field | Value |
|---|---|
| Display | Join Career |
| Category | `career` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character entity ID to employ (default: possessed) |
| career_entity_id | entityId | yes | — | Career entity ID to join |
| job_id | name | yes | — | Job DataTable id within the career |

Usage
==

```js
await inzoi.cli.execute('career.join', {
  entity_id: 0, // optional
  career_entity_id: 0,
  job_id: '',
});
```