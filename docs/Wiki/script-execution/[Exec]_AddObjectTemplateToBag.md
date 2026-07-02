---
slug: "/Wiki/script-execution/Exec_AddObjectTemplateToBag"
---

# [Exec]_AddObjectTemplateToBag

Overview
==

* Generates a random item from a specified Object Template and places it into the character's bag.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The object on which to execute the command |
| Command | AddObjectTemplateToBag |
| S1 | ObjectTemplateId from Object.json for the item(s) to add |
| F1 | Number of items to add (minimum 1) |

Example
==

| Example | BaseObject | Command | S1 | F1 |
| --- | --- | --- | --- | --- |
| Generate a random item from the template and add it to the bag | Self | AddObjectTemplateToBag | ServedFood04_Template | 1 |

Example: ServedFood04_Template may include:

1. ServedRamen01 (Ramen)  
2. ServedDumpling01 (Dumpling)  

An item from this template will be randomly selected and added to the bag.
