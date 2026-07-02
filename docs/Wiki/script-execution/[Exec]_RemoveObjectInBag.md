---
slug: "/Wiki/script-execution/Exec_RemoveObjectInBag"
---

# [Exec]_RemoveObjectInBag

Overview
==

* Removes the specified item from the bag.

Details
==

| Parameter   | Description                              |
|-------------|------------------------------------------|
| BaseObject  | Object to execute the command            |
| Command     | RemoveObjectInBag                        |
| S1          | ID from Object.json of the item to remove |
| F1          | Quantity to remove (minimum 1)           |

Notes
====

If removal fails, a toast message saying "No stored item" will be displayed.

Examples
==

| Example                            | BaseObject     | Command           | S1            | F1 |
|------------------------------------|----------------|-------------------|---------------|----|
| Remove Yukgaejang item from bag    | Self / Target  | RemoveObjectInBag | ServedKsoup01 | 1  |
