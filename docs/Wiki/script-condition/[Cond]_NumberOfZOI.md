---
slug: "/Wiki/script-condition/Cond_NumberOfZOI"
---

# [Cond]_NumberOfZOI

Overview
==

* Observes the area around `BaseObject` to count the number of ZOIs (Zones of Interest) that match a specified condition.
* Compares the count to a target number (`F2`) to determine if the condition returns true.

Parameter
=========

| **Params**   | **Description**                                                                                   |
|--------------|---------------------------------------------------------------------------------------------------|
| BaseObject   | The object to check from (reference point for the search)                                         |
| Command      | NumberOfZOI                                                                                       |
| CompareType  | Type of comparison                                                                                 |
| S1           | Condition category: `{EntityTag}`, `{Job}`, `{BuffTag}`, `{RelationshipRecord}`, `{FamilyRelationshipType}` |
| S2           | Condition value (job ID, tag name, record ID, relationship type, etc.)                            |
| F1           | Radius of observation in cm (must be ≥ 0 and ≤ 1000)                                              |
| F2           | Minimum number of matching ZOIs (must be > 0)                                                     |

**EB1FamilyRelationshipType (Enum)**
====================================

| **Value**       | **Description**      |
|------------------|----------------------|
| Spouse           | Spouse               |
| Parent           | Parent               |
| Sibling          | Sibling              |
| Child            | Child                |
| GrandParent      | Grandparent          |
| GrandChild       | Grandchild           |
| Ancestor         | Ancestor             |
| Descendant       | Descendant           |
| Uncle            | Uncle                |
| Aunt             | Aunt                 |
| Nephew           | Nephew               |
| Cousin           | Cousin               |
| SisterInLaw      | Sister-in-law        |
| BrotherInLaw     | Brother-in-law       |

Examples
========

| **Example**                                                                 | **BaseObject** | **Command**   | **CompareType**  | **S1**     | **S2**   | **F1** | **F2** |
|-----------------------------------------------------------------------------|----------------|----------------|------------------|------------|----------|--------|--------|
| If there are 2 or more Joys with job `Police` within 8m (800 cm) of AOI 1  | Self           | NumberOfZOI    | GreaterOrEqual   | {Job}     | Police  | 800    | 2      |
| If there are no Joys at all within 5m (500 cm) of AOI 1                    | Self           | NumberOfZOI    | Equal            |            |          | 500    | 0      |
