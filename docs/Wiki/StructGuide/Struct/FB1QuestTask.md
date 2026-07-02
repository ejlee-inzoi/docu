## 🧩 Struct: FB1QuestTask

Defines an individual task within a quest, including success/failure scripting.

### Properties

- **MissionDtId** (`FName`): ID of the mission associated with this task. *(Foreign = "Mission.Id")*  
- **SuccessScriptId** (`FName`): Script executed when the task is completed successfully. *(Foreign = "Script_Quest.Id")*  
- **FailScriptId** (`FName`): Script executed when the task fails. *(Foreign = "Script_Quest.Id")*  

## 📚 References

- [Mission](../Mission.md)
- [Script](../Script.md)