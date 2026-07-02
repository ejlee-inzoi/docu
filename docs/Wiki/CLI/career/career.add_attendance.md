# career.add_attendance

Overview
==

- Adds attendance days to a character's career record for retirement eligibility testing

Metadata
==

| Field | Value |
|---|---|
| Display | Add Attendance Days |
| Category | `career` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `B2AddCareerAttendance` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Character EntityId (default: possessed) |
| days | int | no | 20 | Number of days to add |

Usage
==

```js
await inzoi.cli.execute('career.add_attendance', {
  entity_id: 0, // optional
  days: 20, // optional
});
```