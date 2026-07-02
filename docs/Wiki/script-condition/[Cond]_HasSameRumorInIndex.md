---
slug: "/Wiki/script-condition/Cond_HasSameRumorInIndex"
---

# [Cond]_HasSameRumorInIndex

Overview
==

* Determines whether the `BaseObject` has the same rumor as the one at a specific index in the target's rumor list.
* `F1` refers to the index of the rumor held by the `BaseObject`.

Parameter
=========

| Params      | Description                                                |
|-------------|------------------------------------------------------------|
| BaseObject  | The object to check the condition for                      |
| Command     | HasSameRumorInIndex                                        |
| CompareType | Type of comparison (Equal / NotEqual)                      |
| F1          | Index of the rumor owned by BaseObject to compare against  |

Examples
========

| Example Description                                                         | BaseObject | Command              | CompareType | S1 | S2 | F1 | F2 |
|-----------------------------------------------------------------------------|------------|-----------------------|-------------|----|----|----|----|
| Check if Target has the same rumor as the one at index 1 in Self's list    | Target     | HasSameRumorInIndex  | Equal       |    |    | 1  |    |
