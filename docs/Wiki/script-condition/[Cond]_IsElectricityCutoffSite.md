---
slug: "/Wiki/script-condition/Cond_IsElectricityCutoffSite"
---

# [Cond]_IsElectricityCutoffSite

Overview
==

* Checks whether the electricity for the site the target is located in is currently cut off.

Parameter
=========

| Parameter   | Description                                                   |
|-------------|---------------------------------------------------------------|
| BaseObject  | The object whose site is checked for a power outage           |
| Command     | IsElectricityCutoffSite                                       |

Examples
========

| Dialogue Text                              | [Condition] (8 types)     |     |     |     |
|--------------------------------------------|----------------------------|-----|-----|-----|
| BaseObject                                 | Command                    | S1  | S2  |
| Is the site's electricity cut off?         | Self                       | IsElectricityCutoffSite |     |     |
