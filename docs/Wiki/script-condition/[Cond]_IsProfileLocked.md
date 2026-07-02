---
slug: "/Wiki/script-condition/Cond_IsProfileLocked"
---

# [Cond]_IsProfileLocked

Overview
==

* Checks whether specific personal details of the target Joy are locked (i.e., not visible) in their profile.

Parameter
=========

| Parameter   | Description                                                                                   |
|-------------|-----------------------------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                                         |
| Command     | IsProfileLocked                                                                               |
| CompareType | Comparison type (Equal / NotEqual)                                                            |
| S1          | Profile section to check:<br>• `Marriage` – Marital status<br>• `Trait` – Traits<br>• `Job` – Job<br>• `TraitValue` – Values<br>• `Preference` – Preferences<br>• `RomanticOrientation` – Romantic orientation<br>• `RomanceTarget` – Romantic interest target |

Usage Examples
==============

| Description                                      | [Condition]         |         |         |         |
|--------------------------------------------------|----------------------|---------|---------|---------|
| BaseObject                                       | Command              | CompareType | S1     |
| If I know the target Joy’s traits               | Target               | IsProfileLocked | NotEqual | Trait  |
| If I do NOT know the target Joy’s job           | Target               | IsProfileLocked | Equal    | Job    |
