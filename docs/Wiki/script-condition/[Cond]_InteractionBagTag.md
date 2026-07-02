---
slug: "/Wiki/script-condition/Cond_InteractionBagTag"
---

# [Cond]_InteractionBagTag

Overview
==

* Checks whether the avatar’s current Interaction Bag contains a specific tag.

Parameter
=========

| Params      | Description                                  |
|-------------|----------------------------------------------|
| BaseObject  | The object to check the condition for         |
| Command     | InteractionBagTag                            |
| CompareType | Type of comparison                           |
| S1          | InteractionBagTag to compare                 |
|             |                                              |

Examples
========

| Example Description                                                                 | BaseObject | Command            | CompareType | S1             | S2 | F1 | F2 |
|-------------------------------------------------------------------------------------|------------|---------------------|-------------|----------------|----|----|----|
| If my current Interaction Bag contains the "Idle" tag                               | Self       | InteractionBagTag   | Equal       | Idle           |    |    |    |
| If my current Interaction Bag does NOT contain the "Positive_Talk" tag              | Self       | InteractionBagTag   | NotEqual    | Positive_Talk  |    |    |    |
