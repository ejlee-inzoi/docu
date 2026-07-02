---
slug: "/Wiki/script-execution/Exec_RemoveObjectTemplateInBag"
---

# [Exec]_RemoveObjectTemplateInBag

Overview
==

* Removes a random item from the bag that matches the specified object template.

Details
==

| Parameter   | Description                                       |
|-------------|---------------------------------------------------|
| BaseObject  | Object to execute the command                     |
| Command     | RemoveObjectTemplateInBag                         |
| S1          | ObjectTemplateId from Object.json of the item     |
| F1          | Quantity to remove (minimum 1)                    |

Notes
====

If no matching item exists, a toast message saying "No stored item" will be displayed.

Examples
==

| Example                                 | BaseObject    | Command                   | S1                    | F1 |
|-----------------------------------------|---------------|---------------------------|------------------------|----|
| Remove a random item from the bag       | Self / Target | RemoveObjectTemplateInBag | ServedFood04_Template | 1  |

ex) ServedFood04_Template

1. ServedRamen01 (ramen)  
2. ServedDumpling01 (dumpling)  

A random item from this template group will be removed from the bag.
