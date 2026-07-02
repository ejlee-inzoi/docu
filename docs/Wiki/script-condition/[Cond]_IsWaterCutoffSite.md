---
slug: "/Wiki/script-condition/Cond_IsWaterCutoffSite"
---

# [Cond]_IsWaterCutoffSite

Overview
==

* Checks whether the water supply for the site where the object is located is currently **cut off**.

Parameter
=========

| Parameter   | Description                                              |
|-------------|----------------------------------------------------------|
| BaseObject  | The object whose site's water supply status is checked   |
| Command     | IsWaterCutoffSite                                        |

Examples
========

| Dialogue Text                         | [Condition]         |     |     |     |
|--------------------------------------|----------------------|-----|-----|-----|
| BaseObject                           | Command              | S1  | S2  |
| Is the water cut off at the site?    | Object               | IsWaterCutoffSite |     |     |
