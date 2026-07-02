---
slug: "/Wiki/script-condition/Cond_IsPreferenceLike"
---

# [Cond]_IsPreferenceLike

Overview
==

* Checks whether the character has a specific sentiment (e.g. Like, Dislike, Neutral) toward a given preference.

Parameter
=========

| Params      | Description                                                        |
|-------------|--------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                              |
| Command     | IsPreferenceLike                                                   |
| CompareType | Comparison type                                                    |
| S1          | Preference ID                                                      |
| S2          | Preference sentiment to compare: `Common` (Neutral), `Like`, `Dislike` |

Examples
========

| Example Description                                | BaseObject | Command           | CompareType | S1       | S2       | F1 | F2 |
|----------------------------------------------------|------------|--------------------|-------------|----------|----------|----|----|
| If my preference for Dancing is 'Like'             | Self       | IsPreferenceLike   | Equal       | Dancing  | Like     |    |    |
| If my preference for Dancing is NOT 'Like'         | Self       | IsPreferenceLike   | NotEqual    | Dancing  | Like     |    |    |
| If my preference for Cooking is 'Neutral' (Common) | Self       | IsPreferenceLike   | Equal       | Cooking  | Common   |    |    |
| If my preference for Cooking is 'Dislike'          | Self       | IsPreferenceLike   | Equal       | Cooking  | Dislike  |    |    |
