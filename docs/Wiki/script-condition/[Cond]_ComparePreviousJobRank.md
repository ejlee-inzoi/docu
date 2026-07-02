---
slug: "/Wiki/script-condition/Cond_ComparePreviousJobRank"
---

# [Cond]_ComparePreviousJobRank

Overview
==

- Compares the past job rank of a character.  
- **Returns false if the specified `JobId` matches the character's current `JobId`.**  
- **Returns false if the character has no record of the specified `JobId` in their career.**  
- If a matching record exists, returns the result of comparing the rank with `F1`.

Parameters
==========

| Params      | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | Target object to check the condition                                        |
| Command     | ComparePreviousJobRank                                                      |
| CompareType | Equal, NotEqual, Greater, Less, GreaterOrEqual, LessOrEqual                 |
| S1          | CompanyId                                                                   |
| S2          | JobId                                                                       |
| F1          | JobRank to compare                                                          |

Examples
========

| Example                                                        | BaseObject | Command               | CompareType     | S1              | S2                 | F1 | F2 | Prob |
|----------------------------------------------------------------|------------|------------------------|------------------|------------------|---------------------|----|----|------|
| If the rank recorded at Dowon Elementary is 5 or higher        | Self       | ComparePreviousJobRank | GreaterOrEqual   | Dowon_School     | Dowon_Elementary    | 5  |    |      |
| If the rank recorded at Dowon Middle is less than 3            | Self       | ComparePreviousJobRank | Less             | Dowon_School     | Dowon_Middle        | 3  |    |      |
| If the rank recorded at Blissbay High is exactly 1             | Self       | ComparePreviousJobRank | Equal            | Blissbay_School  | Blissbay_High       | 1  |    |      |
