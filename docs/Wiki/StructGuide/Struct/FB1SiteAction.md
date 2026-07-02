## 🧩 Struct: FB1SiteAction

Defines a single action that can be executed in a site context, with parameters and targets.

### Properties

- **Command** (`EB1SiteActionType`): The type of site action to perform.  
- **Target** (`EB1SiteActionTarget`): The target category affected by this action.  
- **S1** (`FName`): First string argument related to the action. *(SearchLink = "FB1SiteAction.Command")*  
- **S2** (`FName`): Second string argument related to the action. *(SearchLink = "FB1SiteAction.Command")*  
- **F1** (`float`): First float parameter used by the action.  
- **F2** (`float`): Second float parameter used by the action.  

## 📚 References

- [EB1SiteActionType](../Enum/EB1SiteActionType.md)
- [EB1SiteActionTarget](../Enum/EB1SiteActionTarget.md)