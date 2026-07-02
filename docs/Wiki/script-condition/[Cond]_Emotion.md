---
slug: "/Wiki/script-condition/Cond_Emotion"
---

# [Cond]_Emotion

Overview
==

* Condition command that checks the avatar's emotional state.

Parameters
==========

| Params      | Description |
|-------------|-------------|
| BaseObject  | Object to check the condition on |
| Command     | Emotion |
| CompareType | Type of comparison |
| S1          | Target emotion to compare<br>Normal / Sleep / Preoccupied / Curious / Convinced / Excited / Enchanting / Funny / Calm / Touched / Surprised / Bored / Tired / Sad / Uncomfortable / Uneasy / Cringing / Irritated / Worried |

Examples
========

| Example                                | BaseObject | Command | CompareType | S1        | S2 | F1 | F2 |
|----------------------------------------|------------|---------|-------------|-----------|----|----|----|
| If my emotion is Happy                 | Self       | Emotion | Equal       | Happy     |    |    |    |
| If my emotion is not Sad              | Self       | Emotion | NotEqual    | Sad       |    |    |    |
| If my emotion is Confident             | Self       | Emotion | Equal       | Confident |    |    |    |
