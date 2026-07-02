---
slug: "/Wiki/script-condition/Cond_EnteredSiteType"
---

# [Cond]_EnteredSiteType

Overview
==

* Returns a result by comparing the type of the site (lot) the character is currently located in.

Parameters
==========

| Params      | Description                          |
|-------------|--------------------------------------|
| BaseObject  | Object to check the condition on     |
| Command     | EnteredSiteType                      |
| CompareType | Type of comparison                   |
| S1          | Site type to check                   |

Examples
========

| Example                                         | BaseObject | Command          | CompareType | S1        | S2 | F1 | F2 | Prob |
|-------------------------------------------------|------------|------------------|-------------|-----------|----|----|----|------|
| If I am in a residential-type lot               | Self       | EnteredSiteType  | Equal       | Residence |    |    |    |      |
| If I am in a public-type lot                    | Self       | EnteredSiteType  | Equal       | Public    |    |    |    |      |
| If I am in a business-type lot                  | Self       | EnteredSiteType  | Equal       | Business  |    |    |    |      |
