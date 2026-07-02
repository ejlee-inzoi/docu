---
slug: "/Wiki/script-condition/Cond_HasUnrequitedLove"
---

# [Cond]_HasUnrequitedLove

Overview
==

* Checks whether the character is currently in unrequited love.  
  (Currently, only one unrequited love can exist at a time.)

Parameter
=========

| Parameter   | Description                                                  |
|-------------|--------------------------------------------------------------|
| BaseObject  | The object to execute the command for                        |
| Command     | HasUnrequitedLove                                            |
| CompareType | Equal (if in unrequited love) / NotEqual (if not)            |

Examples
========

|                       | [Condition]             |           |           |
|-----------------------|-------------------------|-----------|-----------|
| BaseObject            | Command                 | CompareType |
| Are you in unrequited love? | Self              | HasUnrequitedLove | NotEqual |
