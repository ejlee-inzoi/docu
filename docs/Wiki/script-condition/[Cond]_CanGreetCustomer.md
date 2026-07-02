---
slug: "/Wiki/script-condition/Cond_CanGreetCustomer"
---

# [Cond]_CanGreetCustomer

Overview
==

- Checks whether there is a character who can go out to greet during a Coop interaction targeting a door as the MainTarget.  
  Conditions for a character to go out and greet:

  + Must live on the lot where the door is located  
  + Must be present on the lot where the door is located  
  + Must have permission to open the door  
  + Must be able to reach the other side of the door  
  + Must not be in the same zone as the visitor  

Parameters
==========

| Params      | Description |
|------------|-------------|
| BaseObject | Target      |
| Command    | CanGreetCustomer |

Examples
========

| Example                            | BaseObject | Command          | CompareType |
|-----------------------------------|------------|------------------|-------------|
| Can the target go out to greet?   | Target     | CanGreetCustomer |             |
