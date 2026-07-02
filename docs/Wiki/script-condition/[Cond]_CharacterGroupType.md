---
slug: "/Wiki/script-condition/Cond_CharacterGroupType"
---

# [Cond]_CharacterGroupType

Overview
==

- Checks the character group type of the target object.

Parameters
==========

| Params      | Description                                        |
|-------------|----------------------------------------------------|
| BaseObject  | Target object to check the condition               |
| Command     | CharacterGroupType                                 |
| CompareType | Comparison type (Equal / NotEqual / None = Equal)  |
| S1          | Character group type to compare (`EB1CharacterGroupType`) |

Examples
========

| Example                                         | BaseObject | Command             | CompareType | S1              | S2 | F1 | F2 |
|-------------------------------------------------|------------|----------------------|-------------|------------------|----|----|----|
| Is the target a Crowd character group?          | Target     | CharacterGroupType   | Equal       | Crowd            |    |    |    |
| Am I not in the ResidenceFamily character group?| Self       | CharacterGroupType   | NotEqual    | ResidenceFamily  |    |    |    |
| Am I in the CompanyRoleNpc character group?     | Self       | CharacterGroupType   |             | CompanyRoleNpc   |    |    |    |
