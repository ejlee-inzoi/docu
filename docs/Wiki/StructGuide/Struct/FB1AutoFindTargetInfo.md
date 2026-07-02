## 🧩 Struct: FB1AutoFindTargetInfo

Defines how a target is automatically selected and what interaction should be triggered upon selection.

### Properties

- **AutoFindTargetType** (`EB1AutoFindTargetType`): Specifies the method used to find the target automatically.  
- **AutoFindId** (`FName`): Identifier used in conjunction with the target type (e.g., object id, interaction bag id, character id).  
- **ExcuteInteractionId** (`FName`): If a valid ID is provided, this interaction will be executed with the selected target (replaces the current queue). If `NAME_None`, only target selection occurs without triggering an interaction.  


## 📚 References

- [EB1AutoFindTargetType](../Enum/EB1AutoFindTargetType.md)