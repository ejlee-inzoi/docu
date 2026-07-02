---
slug: "/Wiki/script-execution/Exec_Pregnancy"
---

# [Exec]_Pregnancy

Overview
==

* Executes pregnancy-related functionality.  
* Use `S1` to specify which action to invoke:

### S1 Options:

- `Prepare`  
  - Used when trying to conceive. Stores the father's genetics in advance.  
  - The father's genetics are automatically stored in the female between `Self` and `Target`.

- `Start`  
  - Initiates pregnancy using the genetics saved during the most recent `Prepare`.  
  - The initial state is `PregnancyTest`, meaning the character is pregnant but has not yet taken a pregnancy test.

- `Proceed`  
  - Progresses the pregnancy to the next stage, if the Joy is currently pregnant.  
  - For example: `PregnancyEarly → PregnancyMid`  
  - Each pregnancy state (see `PregnancyStates` in `DA_Life`) includes:
    - `Duration`: Duration of this stage (in in-game minutes)
    - `BodyMorphScale`: Belly protrusion scale (0–1)
    - `HideInUI`: Whether to hide the pregnancy from the UI (used in `PregnancyTest` stage)
  - If called in the final stage (`ImminentBirth`), it triggers the `FinishPregnancyLifeTriggerId` from `DA_Life` and ends the pregnancy.

- `Cancel`  
  - Cancels the pregnancy.

Details
==

| Parameter | Description |
| --- | --- |
| BaseObject | The Joy who is or may become pregnant (Self/Target).  
`Prepare` will automatically determine who becomes pregnant. |
| Command | Pregnancy |
| S1 | Action to perform: `Prepare`, `Start`, `Proceed`, or `Cancel` |

Example
==

| Example | BaseObject | Command | S1 | S2 | F1 | F2 | Prob |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Attempting to conceive | Self | Pregnancy | Prepare |  |  |  |  |
| Attempting to conceive | Target | Pregnancy | Prepare |  |  |  |  |
| Start pregnancy after intercourse | Self | Pregnancy | Start |  |  |  |  |
| Advance to the next pregnancy stage | Self | Pregnancy | Proceed |  |  |  |  |
| Cancel the pregnancy | Self | Pregnancy | Cancel |  |  |  |  |
