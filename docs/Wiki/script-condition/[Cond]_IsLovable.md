---
slug: "/Wiki/script-condition/Cond_IsLovable"
---

# [Cond]_IsLovable

Overview
==

* Checks whether the `Self` and `Target` can fall in love with each other.

Conditions:
- **Age check**
  - Below "HighTeen" (adolescents) cannot fall in love.
  - "HighTeen" cannot fall in love with adults (Youth or older).
- **Kinship check**
  - Romance is allowed only for relatives at or beyond 5th cousins (4th cousins or closer are not allowed).
- **Sexual orientation check** (can be skipped using `IgnoreMatchingRomanceTarget`)
  - `IsMatchingRomanceTarget` must return true for both parties unless ignored.
  - See also: `[Cond]_IsMatchingRomanceTarget`

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| Command     | IsLovable                                                                   |
| CompareType | Comparison type (Equal / NotEqual)                                          |
| S1          | Optional: `IgnoreMatchingRomanceTarget` to skip sexual orientation checks   |

Examples
========

| Example Description                                                         | BaseObject | Command    | CompareType | S1                             | S2 | F1 | F2 |
|-----------------------------------------------------------------------------|------------|-------------|-------------|----------------------------------|----|----|----|
| If Self and Target are romantically compatible                              | Self       | IsLovable   | Equal       |                                  |    |    |    |
| If Self and Target are NOT romantically compatible                          | Self       | IsLovable   | NotEqual    |                                  |    |    |    |
| If Self and Target can fall in love, ignoring sexual orientation            | Self       | IsLovable   | Equal       | IgnoreMatchingRomanceTarget     |    |    |    |
| If Self and Target still cannot fall in love even ignoring sexual orientation | Self     | IsLovable   | NotEqual    | IgnoreMatchingRomanceTarget     |    |    |    |
