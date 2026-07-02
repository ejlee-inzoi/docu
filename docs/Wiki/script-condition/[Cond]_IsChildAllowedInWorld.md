---
slug: "/Wiki/script-condition/Cond_IsChildAllowedInWorld"
---

# [Cond]_IsChildAllowedInWorld

Overview
==

* Condition to determine whether a child is allowed in the current world.
* Returns `false` if the city has reached its maximum population.
* If neither Self nor Target belongs to the active (player-controlled) household, the condition also depends on passing a random pregnancy chance defined per city.

Parameter
=========

| Params      | Description                                                                                                                  |
|-------------|------------------------------------------------------------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for. Not functionally used in this command.<br>If either Self or Target belongs to the active household, the city's PregnancyRate must also be passed to return true. |
| Command     | IsChildAllowedInWorld                                                                                                        |

Examples
========

| Example Description                                                                                                                    | BaseObject | Command               | CompareType | S1 | S2 | F1 | F2 |
|----------------------------------------------------------------------------------------------------------------------------------------|------------|------------------------|-------------|----|----|----|----|
| If either Self or Target is part of the active family and pregnancy is allowed in the current city (city population below max)         | Self       | IsChildAllowedInWorld |             |    |    |    |    |
| If neither Self nor Target is part of the active family and pregnancy is allowed (below population cap + passed random city chance)     | Self       | IsChildAllowedInWorld |             |    |    |    |    |
