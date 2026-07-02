# career.set_exam_preparation

Overview
==

- Sets a school student's exam preparation score (0-100) to test exam results/grades without studying. Reset to 0 on the weekly school reset (Monday).

Metadata
==

| Field | Value |
|---|---|
| Display | Set Exam Preparation |
| Category | `career` |
| Access | `UserCheat` |
| Scope | `B2Authority` |
| Tags | — |
| Aliases | `SetExamPreparation` |

Parameters
==

| Name | Type | Required | Default | Description |
|---|---|---|---|---|
| entity_id | entityId | no | — | Target entity ID (default: possessed) |
| value | int | yes | — | Exam preparation score (0-100) |

Usage
==

```js
await inzoi.cli.execute('career.set_exam_preparation', {
  entity_id: 0, // optional
  value: 0,
});
```