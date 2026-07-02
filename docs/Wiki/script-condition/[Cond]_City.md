---
slug: "/Wiki/script-condition/Cond_City"
---

# [Cond]_City

Overview
==

- Checks whether the city entered in `S1` matches the city where the character in `BaseObject` is currently located.

Parameters
==========

| Params      | Description                           |
|-------------|---------------------------------------|
| BaseObject  | Self/Target (character entity)        |
| Command     | City                                  |
| CompareType | Comparison type (Equal, NotEqual)     |
| S1          | City ID currently being played        |

Examples
========

| Example                          | BaseObject | Command | CompareType | S1            |
|----------------------------------|------------|---------|-------------|----------------|
| If the character is in Dowon     | Self       | City    | Equal       | Gangnam_Map     |
| If the character is not in Dowon | Self       | City    | NotEqual    | Gangnam_Map     |
| If the character is in Bliss Bay | Self       | City    | Equal       | RedCity_Map     |
