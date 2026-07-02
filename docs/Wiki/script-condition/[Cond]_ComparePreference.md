---
slug: "/Wiki/script-condition/Cond_ComparePreference"
---

# [Cond]_ComparePreference

Overview
==

- Checks how many preferences are shared between Self and Target.

Parameters
==========

| Params      | Description                          |
|-------------|--------------------------------------|
| BaseObject  | Target object to check the condition |
| Command     | ComparePreference                    |
| CompareType | Type of comparison operation         |
| F1          | Number of matching preferences       |

Examples
========

Given the following preference comparison:

|            | A   | B   |
|------------|-----|-----|
| Soccer     | Like| Like|
| Cleaning   | Like|     |
| Drums      |     | Dislike |
| Guitar     | Dislike | Dislike |
| Books      | Dislike | Like |

The result is `2` matches (Soccer, Guitar).

| Example                          | BaseObject | Command           | CompareType | S1 | S2 | F1 | F2 | Prob |
|----------------------------------|------------|--------------------|-------------|----|----|----|----|------|
| If there are 2 matching preferences |            | ComparePreference | Equal       |    |    | 2  |    |      |
