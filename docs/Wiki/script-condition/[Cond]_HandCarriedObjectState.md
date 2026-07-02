---
slug: "/Wiki/script-condition/Cond_HandCarriedObjectState"
---

# [Cond]_HandCarriedObjectState

Overview
==

Checks the state of the object being carried by Self or Target.

If no object is being carried, this condition always returns false.

Parameters
==========

| Params      | Description                         |
|-------------|-------------------------------------|
| Command     | HandCarriedObjectState              |
| CompareType | Equal / NotEqual                    |
| S1          | StateGroupId                        |
| S2          | StateId                             |

Examples
========

| Example                                             | BaseObject | Command                 | CompareType | S1      | S2      | F1 | F2 |
|-----------------------------------------------------|------------|--------------------------|-------------|---------|---------|----|----|
| If the food I'm holding is in "Spoiled" state       | Self       | HandCarriedObjectState   | Equal       | Spoiled | Spoiled |    |    |
| If the food the Target is holding is in "Garbage" state | Target     | HandCarriedObjectState   | Equal       | Garbage | Garbage |    |    |
