# Condition

Overview
==

This document explains how to use the Parameters, Enums, and Commands used in Condition blocks within Scripts.

* Newly added Commands will be organized into subdirectories.
* The Condition data format is consistently used across Scripts, Actions, and other components.

Definition
--

* A unit of conditional expression required to execute the Execute function in a script.

Usage
-----

* Designed to be input-friendly using Excel.
* Enter parameters according to the context of the condition.
* If multiple conditions are listed, they will be evaluated with AND logic.

Parameter
=========

| Params | Description |
| --- | --- |
| Target | The object to evaluate the condition against |
| Command | Function type |
| CompareType | Type of comparison operation |
| S1 | String parameter 1 |
| S2 | String parameter 2 |
| F1 | Float parameter 1 |
| F2 | Float parameter 2 |

CompareType
===========

* Enum types used for comparison operations in Conditions

| CompareType | Symbol | Description |
| --- | --- | --- |
| Equal | == | Equal to |
| NotEqual | != | Not equal to |
| Greater | < | Greater than |
| Less | > | Less than |
| GreaterOrEqual | <= | Greater than or equal to |
| LessOrEqual | >= | Less than or equal to |

Full List
====
