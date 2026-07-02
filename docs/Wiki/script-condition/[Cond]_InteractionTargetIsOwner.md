---
slug: "/Wiki/script-condition/Cond_InteractionTargetIsOwner"
---

# [Cond]_InteractionTargetIsOwner

Overview
==

* Determines whether the interaction target of the current interaction being executed by the BaseObject **is the BaseObject itself**.

Parameter
=========

| Params      | Description                                                                                     |
|-------------|-------------------------------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                                           |
| Command     | InteractionTargetIsOwner                                                                        |
| S1          | If `True`: returns true if the interaction target **is** the BaseObject. <br> If `False`: returns true if the interaction target **is not** the BaseObject. |

Examples
========

| Example Description                                                          | BaseObject | Command                  | CompareType | S1    | S2 | F1 | F2 |
|------------------------------------------------------------------------------|------------|---------------------------|-------------|-------|----|----|----|
| If Self is the target of their own interaction                              | Self       | InteractionTargetIsOwner | None        | True  |    |    |    |
| If Target's interaction target is not the Target itself                     | Target     | InteractionTargetIsOwner | None        | False |    |    |    |
