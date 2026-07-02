## 🧩 Struct: FB1QuestInfo

Defines a quest's timing, associated tasks, and required conditions.

### Properties

- **StartTime** (`int32`): In-game timestamp when the quest begins.  
- **EndTime** (`int32`): In-game timestamp when the quest ends.  
- **ExpireTime** (`int32`): Deadline after which the quest becomes invalid.  
- **QuestTask** (`TArray<FB1QuestTask>`): List of tasks that must be completed to finish the quest.  
- **Conditions** (`TArray<FB1Condition>`): Conditions required for the quest to be available or continue.  

## 📚 References

- [FB1QuestTask](./FB1QuestTask.md)
- [FB1Condition](./FB1Condition.md)