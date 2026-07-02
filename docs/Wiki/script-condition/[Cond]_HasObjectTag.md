---
slug: "/Wiki/script-condition/Cond_HasObjectTag"
---

# [Cond]_HasObjectTag

Overview
==

* Checks whether the object has a specific ObjectTag defined in ObjectData.

Parameter
=========

| Params      | Description                              |
|-------------|------------------------------------------|
| BaseObject  | The object to check the condition for     |
| Command     | HasObjectTag                             |
| CompareType | Type of comparison                       |
| S1          | Name of the ObjectTag                    |
| F1          | (Unused)                                 |

Examples
========

| Example Description                          | BaseObject | Command      | CompareType | S1     | S2 | F1 | F2 | Prob |
|----------------------------------------------|------------|--------------|-------------|--------|----|----|----|------|
| If the object has the "Nature" tag            | Self       | HasObjectTag | Equal       | Nature |    |    |    |      |
| If the object does NOT have the "Nature" tag  | Self       | HasObjectTag | NotEqual    | Nature |    |    |    |      |
