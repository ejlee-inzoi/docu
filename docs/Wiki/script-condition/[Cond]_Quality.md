---
slug: "/Wiki/script-condition/Cond_Quality"
---

# [Cond]_Quality

Overview
==

* Checks the **quality** of a food item (expected to be set on `Self`).

Parameter
=========

| Params      | Description                                                        |
|-------------|--------------------------------------------------------------------|
| BaseObject  | Object to check (must be `Self`, and should be a food item)        |
| Command     | Quality                                                            |
| CompareType | Type of comparison (Equal, NotEqual, Greater, Less, etc.)          |
| S1          | Food quality level (`EB1Quality`):<br>• None<br>• Bad<br>• Fair<br>• Good<br>• High<br>• Superb |

Examples
========

| Example Description                             | BaseObject | Command  | CompareType | S1   | S2 | F1 | F2 |
|-------------------------------------------------|------------|----------|-------------|------|----|----|----|
| If the food’s quality is `Bad`                  | Self       | Quality  | Equal       | Bad  |    |    |    |
| If the food’s quality is less than or equal to `High` | Self   | Quality  | LessEqual   | High |    |    |    |
