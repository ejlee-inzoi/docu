---
slug: "/Wiki/script-condition/Cond_ObjectSize"
---

# [Cond]_ObjectSize

Overview
==

* Checks the **size** of a game object based on either its volume or the sum of its dimensions.

Parameter
=========

| Params      | Description                                                                      |
|-------------|----------------------------------------------------------------------------------|
| BaseObject  | The object to evaluate                                                           |
| Command     | ObjectSize                                                                       |
| CompareType | Type of comparison (Equal, Greater, Less, etc.)                                  |
| S1          | Size metric to use:<br>• `Volume` → x × y × z<br>• `SumXYZ` → x + y + z          |
| F1          | Value to compare against                                                         |

Examples
========

| Example Description                                               | BaseObject | Command     | CompareType  | S1      | S2 | F1  | F2 |
|-------------------------------------------------------------------|------------|-------------|---------------|---------|----|-----|----|
| If the object's volume is less than 100                          | Target     | ObjectSize  | Less          | Volume  |    | 100 |    |
| If the object's volume is greater than 30                        | Target     | ObjectSize  | Greater       | Volume  |    | 30  |    |
| If the sum of the object's x, y, z dimensions is 30 or less      | Target     | ObjectSize  | LessOrEqual   | SumXYZ  |    | 30  |    |
