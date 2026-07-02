# career.get_work_status

Overview
==

- Returns work schedule status for a character (has_job, is_working_time, is_working_day, is_at_work, simulated, work_site_id, home_site_id). Supports batch via comma-separated entity_ids.

Metadata
==

| Field | Value |
|---|---|
| Display | Get Work Status |
| Category | `career` |
| Access | `Public` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | — |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| entity_ids | string | no | — | Comma-separated entity IDs for batch query |

Usage
==

```js
await inzoi.cli.execute('career.get_work_status', {
  entity_id: 0, // optional
  entity_ids: '', // optional
});
```