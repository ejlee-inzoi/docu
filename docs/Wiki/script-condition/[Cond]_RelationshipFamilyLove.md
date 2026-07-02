---
slug: "/Wiki/script-condition/Cond_RelationshipFamilyLove"
---

# [Cond]_RelationshipFamilyLove

Overview
==

* A condition command that compares the family harmony level of the lot where the avatar resides.

Parameter
=========

| Params | Description |
| --- | --- |
| BaseObject | The character to evaluate: Self/Target |
| Command | RelationshipFamilyLove |
| CompareType | Comparison operator (Less, LessOrEqual, Equal, NotEqual, Greater, GreaterOrEqual) |
| S1 | Harmony level range to compare: Worst (-3 to -2), Bad (-2 to 0), Good (0 to 2), Best (2 to 3), Invalid (No harmony level) |

| Harmony Level | Discord | Tension | Normal | Harmony |
| --- | --- | --- | --- | --- |
| Score Range | -3 to -2 | -2 to 0 | 0 to 2 | 2 to 3 |

Discord = Worst  
Tension = Bad  
Normal = Good  
Harmony = Best  
No harmony = Invalid (Single household or a non-primary resident on a harmonized lot)

Example
==

| Example | BaseObject | Command | CompareType | S1 | S2 | F1 | F2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Is the harmony level of the lot where the self avatar resides at Discord? | Self | RelationshipFamilyLove | Equal | Worst |  |  |  |
| Is the harmony level of the lot where the self avatar resides higher than Discord? | Self | RelationshipFamilyLove | Greater | Worst |  |  |  |
| Is the harmony level of the lot where the self avatar resides equal to or higher than Discord? | Self | RelationshipFamilyLove | GreaterOrEqual | Worst |  |  |  |
| Is the harmony level of the lot where the self avatar resides not Invalid? | Self | RelationshipFamilyLove | NotEqual | Invalid |  |  |  |
| Is the harmony level of the lot where the target avatar resides at Harmony? | Target | RelationshipFamilyLove | Equal | Best |  |  |  |
| Is the harmony level of the lot where the target avatar resides not Discord? | Target | RelationshipFamilyLove | NotEqual | Worst |  |  |  |
