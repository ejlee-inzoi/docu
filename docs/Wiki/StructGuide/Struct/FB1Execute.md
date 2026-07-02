## 🧩 Struct: FB1Execute

Defines a scriptable execution instruction, including command type, arguments, and probability.

### Properties

- **BaseObject** (`EB1BaseObject`): Context object to which the command is applied (e.g., Self, Target).  
- **Command** (`EB1ExecuteType`): Type of command to execute.  
- **S1** (`FName`): First string argument, often ID or tag. *(SearchLink = "FB1Execute.Command")*  
- **S2** (`FName`): Second string argument, used contextually.  
- **F1** (`float`): First numeric argument.  
- **F2** (`float`): Second numeric argument.  
- **Prob** (`float`): Probability (0.0–1.0) that this execution will occur.  

## 📚 References

- [EB1BaseObject](../Enum/EB1BaseObject.md)
- [EB1ExecuteType](../Enum/EB1ExecuteType.md)