## 🧩 Struct: FB1AmbitionStepDefine

Defines a single step in the ambition system, including the required missions and script to execute upon completion.

### Properties

- **Step** (`int32`): The numerical index of this ambition step, clamped between 1 and 999.  
- **StepCompleteScriptId** (`FName`): Script to execute when this step is completed (linked to `Script_Ambition.Id`).  
- **StepMissions** (`TArray<FB1AmbitionStepMissionDefine>`): List of missions required to complete this ambition step.  

## 📚 References

- [FB1AmbitionStepMissionDefine](./FB1AmbitionStepMissionDefine.md)