---
slug: "/Wiki/script-condition/Cond_CanPregnancy"
---

# [Cond]_CanPregnancy

Overview
==

- Determines whether the Self and Target objects can conceive a child.

  + One must be biologically female, the other male (checked by physical sex, not gender identity)  
  + The female must not already be pregnant  
  + Both must be at least "Youth" or older  
  + The female must have room in their household for a child  
  + If the interaction is triggered by autonomy, and either Self or Target belongs to the currently played household, return false (to prevent unwanted pregnancy)

Parameters
==========

| Params      | Description                          |
|-------------|--------------------------------------|
| Command     | CanPregnancy                         |
| CompareType | Comparison type (Equal / NotEqual)   |

Examples
========

| Example                                 | BaseObject | Command      | CompareType | S1 | S2 | F1 | F2 |
|----------------------------------------|------------|--------------|-------------|----|----|----|----|
| If Self and Target can conceive a child     | Self      | CanPregnancy | Equal       |    |    |    |    |
| If Self and Target cannot conceive a child  | Self      | CanPregnancy | NotEqual    |    |    |    |    |
