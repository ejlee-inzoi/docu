---
slug: "/Wiki/script-condition/Cond_EmotionTendency"
---

# [Cond]_EmotionTendency

Overview
==

* Condition command that checks the emotional tendency of the avatar's current emotion.

Parameters
==========

| Params      | Description |
|-------------|-------------|
| BaseObject  | Object to check the condition on |
| Command     | EmotionTendency |
| CompareType | Type of comparison |
| S1          | Emotional tendency value to compare |

**EB1EmotionTendency (Enum)**
=============================

Enum type used to classify emotional tendencies.

| Value     | Description     |
|-----------|-----------------|
| Natural   | Neutral/Normal  |
| Positive  | Positive        |
| Negative  | Negative        |

Examples
========

| Example                                                 | BaseObject | Command          | CompareType | S1       | S2 | F1 | F2 |
|---------------------------------------------------------|------------|------------------|-------------|----------|----|----|----|
| If my emotional tendency is Positive                    | Self       | EmotionTendency  | Equal       | Positive |    |    |    |
| If my emotional tendency is not Negative                | Self       | EmotionTendency  | NotEqual    | Negative |    |    |    |
