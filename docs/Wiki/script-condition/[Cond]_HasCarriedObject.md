---
slug: "/Wiki/script-condition/Cond_HasCarriedObject"
---

# [Cond]_HasCarriedObject

Overview
==

* Condition command that checks whether the Self object is holding a CarriedObject (e.g., a book).

Parameters
==========

| Params      | Description |
|-------------|-------------|
| BaseObject  | Object to check the condition on |
| Command     | HasCarriedObject |
| CompareType | Type of comparison (Equal, NotEqual) |
| S1          | * (empty): Check for any carried item<br>Target: Check if holding a character target<br>Object: Check if holding a GameObject<br>Character: Check if holding a character (e.g., baby)<br>HandOver: Check if holding an item that can be handed over |
| S2          | <To be implemented><br>* (empty): Check both hands<br>Left, Right |

Examples
========

| Example                                                    | BaseObject | Command           | CompareType | S1        | S2 | F1 | F2 | Prob |
|------------------------------------------------------------|------------|--------------------|-------------|-----------|----|----|----|------|
| Am I holding anything in my hands?                         | Self       | HasCarriedObject   | Equal       |           |    |    |    |      |
| Am I not holding anything in my hands?                     | Self       | HasCarriedObject   | NotEqual    |           |    |    |    |      |
| Am I holding a character (e.g., baby)?                     | Self       | HasCarriedObject   | Equal       | Character |    |    |    |      |
| Am I holding an object?                                    | Self       | HasCarriedObject   | Equal       | Object    |    |    |    |      |
| Am I holding an item that can be handed over?              | Self       | HasCarriedObject   | Equal       | HandOver  |    |    |    |      |
