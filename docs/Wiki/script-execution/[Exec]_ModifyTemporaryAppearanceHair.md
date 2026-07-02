---
slug: "/Wiki/script-execution/Exec_ModifyTemporaryAppearanceHair"
---

# [Exec]_ModifyTemporaryAppearanceHair

Overview
==

* Temporarily modifies the hair appearance of the specified character.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object (character) on which to execute the command |
| Command | ModifyTemporaryAppearance |
| S1 | Hair part to modify |
| S2 | Color and intensity to apply (Color Hex) |
| F1 | Duration to maintain the appearance change (in in-game minutes) |

Reference
====

Color Hex examples:  
See `ColorMapping.json`, `AppearanceSkinColor.json`  

Hair part examples:  
See `AppearanceParts.json`

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 |
| --- | --- | --- | --- | --- | --- |
| Change hair tip color | Self / Target | ModifyTemporaryAppearance | TipColor | B59A8AFF | 1440 |
