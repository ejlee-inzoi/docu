---
slug: "/Wiki/script-condition/Cond_OutfitCategory"
---

# [Cond]_OutfitCategory

Overview
==

* Checks the **current outfit category** worn by the avatar.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for (usually a character)                |
| Command     | OutfitCategory                                                              |
| CompareType | Type of comparison (Equal / NotEqual)                                       |
| S1          | Outfit category to check:<br>• Everyday<br>• Formal<br>• School<br>• Sleep<br>• Party<br>• Sports<br>• Swimwear<br>• Summer<br>• Winter |
| S2          | Scope of check:<br>• `Current` – only the most recently worn outfit (default)<br>• `All` – checks all outfit categories stacked |

Examples
========

| Example Description                                                   | BaseObject | Command         | CompareType | S1     | S2   | F1 | F2 |
|-----------------------------------------------------------------------|------------|------------------|-------------|--------|------|----|----|
| If I am currently wearing a formal outfit                            | Self       | OutfitCategory   | Equal       | Formal |      |    |    |
| If I am NOT currently wearing a formal outfit                        | Self       | OutfitCategory   | NotEqual    | Formal |      |    |    |
| If I have worn any formal outfit in my current outfit stack          | Self       | OutfitCategory   | Equal       | Formal | All  |    |    |
| If there is no formal outfit in my current outfit stack              | Self       | OutfitCategory   | NotEqual    | Formal | All  |    |    |
