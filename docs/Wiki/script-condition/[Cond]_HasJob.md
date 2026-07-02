---
slug: "/Wiki/script-condition/Cond_HasJob"
---

# [Cond]_HasJob

Overview
==

* A condition command that checks the avatar's current job.

Parameter
=========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                       |
| Command     | HasJob                                                                      |
| CompareType | Type of comparison                                                          |
| S1          | Job ID to compare against<br>• If set to **None**, checks if any job exists<br>• If set to **Target**, compares job with Target (only when BaseObject is Self) |

Examples
========

| Example                                        | BaseObject | Command | CompareType | S1          | S2 | F1 | F2 | Prob |
|------------------------------------------------|------------|---------|-------------|-------------|----|----|----|------|
| If I am a firefighter                         | Self       | HasJob  | Equal       | FireFighter |    |    |    |      |
| If I am not a firefighter                     | Self       | HasJob  | NotEqual    | FireFighter |    |    |    |      |
| If I am an idol trainee                       | Self       | HasJob  | Equal       | IdolTrainee |    |    |    |      |
| If I currently have a job                     | Self       | HasJob  | Equal       |             |    |    |    |      |
| If I have the same job as the target          | Self       | HasJob  | Equal       | Target      |    |    |    |      |
