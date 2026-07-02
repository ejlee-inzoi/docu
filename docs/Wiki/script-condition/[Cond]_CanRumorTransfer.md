---
slug: "/Wiki/script-condition/Cond_CanRumorTransfer"
---

# [Cond]_CanRumorTransfer

### Overview

Determines whether the `BaseObject` can transfer a rumor at a specific index to the `Target`.  
In other words, checks whether one character can pass a rumor to another in-game.

---

### Parameters

| Name         | Description                               |
|--------------|-------------------------------------------|
| `BaseObject` | Target object to check the condition      |
| `Command`    | `CanRumorTransfer`                        |
| `CompareType`| Used to determine if transfer is possible |
| `F1`         | Index of the rumor held by `BaseObject` (int) |

### Examples

| Example                                                      | BaseObject | Command           | CompareType | S1 | S2 | F1 | F2 |
|--------------------------------------------------------------|------------|-------------------|-------------|----|----|----|----|
| Check if rumor index 1 from `Self` can be transferred to `Target`  | Self       | CanRumorTransfer | Equal       |    |    | 1  |    |
| Check if rumor index 1 from `Target` can be transferred to `Self`  | Target     | CanRumorTransfer | Equal       |    |    | 1  |    |
