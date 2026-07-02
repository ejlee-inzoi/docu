---
slug: "/Wiki/script-condition/Cond_OwnedEmotionLevel"
---

# [Cond]_OwnedEmotionLevel

Overview
==

* Checks the **level of a specific emotion** that the character currently possesses.

Parameter
=========

| Params      | Description                                                            |
|-------------|------------------------------------------------------------------------|
| BaseObject  | The object to evaluate (Self or Target)                                |
| Command     | EmotionLevel                                                           |
| CompareType | Type of comparison                                                     |
| S1          | Emotion type to check:<br>• Normal<br>• Sleep<br>• Preoccupied<br>• Curious<br>• Convinced<br>• Excited<br>• Enchanting<br>• Funny<br>• Calm<br>• Touched<br>• Surprised<br>• Bored<br>• Tired<br>• Sad<br>• Uncomfortable<br>• Uneasy<br>• Cringing<br>• Irritated<br>• Worried<br>• Happy<br>• Confident |
| F1          | Level of the emotion to compare                                        |

Examples
========

| Example Description                                                                            | BaseObject | Command       | CompareType | S1        | S2 | F1 | F2 |
|------------------------------------------------------------------------------------------------|------------|----------------|-------------|-----------|----|----|----|
| If I possess the emotion `Happy` at level 1                                                    | Self       | EmotionLevel   | Equal       | Happy     |    | 1  |    |
| If I possess the emotion `Sad` at level 2                                                      | Self       | EmotionLevel   | Equal       | Sad       |    | 2  |    |
| If I possess the emotion `Confident` at level 2                                                | Self       | EmotionLevel   | Equal       | Confident |    | 2  |    |
| If the Target possesses the emotion `Happy` at level greater than 1                            | Target     | EmotionLevel   | Greater     | Happy     |    | 1  |    |
