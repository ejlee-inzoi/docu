---
slug: "/Wiki/script-execution/Exec_RelationshipTalkRecord"
---

# [Exec]_RelationshipTalkRecord

Overview
==

* Creates a relationship record between Joy characters as shown in the Joy Profile.  
  To establish a relationship between two Joys, it's recommended to execute this command mutually between Self and Target.

Details
==

| Parameter   | Description                             |
|-------------|-----------------------------------------|
| BaseObject  | Object to execute the command           |
| Command     | RelationshipTalkRecord                  |
| S1          | Record Table ID                         |
| Prob        | Probability for the record to be created (0~1) |

Examples
==

| Example                                                                 | BaseObject | Command                | S1                     | S2 | F1 | F2 |
|-------------------------------------------------------------------------|------------|------------------------|------------------------|----|----|----|
| Create a relationship record with Target for Self using RelationshipRecord_Id | Self       | RelationshipTalkRecord | RelationshipRecord_Id  |    |    |    |
| Create a relationship record with Self for Target using RelationshipRecord_Id | Target     | RelationshipTalkRecord | RelationshipRecord_Id  |    |    |    |
