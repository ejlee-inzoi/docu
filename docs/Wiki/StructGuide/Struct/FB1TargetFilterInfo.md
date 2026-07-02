## 🧩 Struct: FB1TargetFilterInfo

Defines a target filter entry used to select interaction targets and optionally override the interaction to execute.

### Properties

- **TargetFilterId** (`FName`): ID of the target filter to apply when evaluating interaction candidates. *(Foreign = "TargetFilter.Id")*  
- **ExcuteInteractionId** (`FName`): Optional override interaction ID to execute when the filter selects a target. *(Foreign = "Interaction.Id")*  

## 📚 References

- [TargetFilter](../TargetFilter.md)
- [Interaction](../Interaction.md)
