---
slug: "/Wiki/script-condition/Cond_EmotionLevel"
---

# [Cond]_EmotionLevel

Overview
==

* Condition command that checks the emotional level of the avatar.

Parameters
==========

| Params      | Description |
|-------------|-------------|
| BaseObject  | Object to check the condition on |
| Command     | EmotionLevel |
| CompareType | Type of comparison |
| S1          | Target emotional state to compare<br>Normal / Sleep / Preoccupied / Curious / Convinced / Excited / Enchanting / Funny / Calm / Touched / Surprised / Bored / Tired / Sad / Uncomfortable / Uneasy / Cringing / Irritated / Worried |
| F1          | Emotional level value to compare against |

Examples
========

| Example                                                        | BaseObject | Command       | CompareType | S1        | S2 | F1 | F2 |
|----------------------------------------------------------------|------------|----------------|-------------|-----------|----|----|----|
| If my emotion is Happy and the level is 1                      | Self       | EmotionLevel   | Equal       | Happy     |    | 1  |    |
| If my emotion is Sad and the level is 2                        | Self       | EmotionLevel   | Equal       | Sad       |    | 2  |    |
| If my emotion is Confident and the level is 2                  | Self       | EmotionLevel   | Equal       | Confident |    | 2  |    |
