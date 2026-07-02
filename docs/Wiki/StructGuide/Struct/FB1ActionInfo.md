## 🧩 Struct: FB1ActionInfo

Defines an action's configuration, including its type, timing, scripting, and optional costs. Used for driving simulation behaviors and interactions.

### Properties

- **Conditions** (`TArray<FB1Condition>`): List of conditions that must be satisfied for the action to proceed.  
- **Duration** (`float`): Time duration of the action in seconds.  
- **IsForceCancelable** (`bool`): If true, the action can be forcibly canceled at any time.  
- **IsWaitFinishAction** (`bool`): If true, the system waits for this action to finish before moving on.  
- **FinishPrev** (`bool`): If true, the previous action must finish before this one starts.  
- **BaseObject** (`EB1BaseObject`): Defines the base object context in which the action operates.  
- **Command** (`EB1ActionType`): Specifies the type of action to be executed.  
- **S1** (`FName`): Custom string parameter used as input to the action. Linked to Command.  
- **S2** (`FName`): Secondary string parameter for the action.  
- **F1** (`float`): First numeric float parameter for action customization.  
- **F2** (`float`): Second numeric float parameter for action customization.  
- **StartScriptIdList** (`TArray<FName>`): List of script IDs to execute when the action starts.  
- **TickScriptIdList** (`TArray<FName>`): Scripts that run periodically while the action is active.  
- **TickInterval** (`float`): Time interval between each TickScript execution.  
- **FinishScriptIdList** (`TArray<FName>`): Scripts to run when the action successfully finishes.  
- **CancelScriptIdList** (`TArray<FName>`): Scripts to run if the action is canceled.  
- **NotifyScriptIds** (`TArray<FName>`): Script notifications triggered by external events.  
- **ConsumeCurrencyId** (`FName`): Currency ID to consume when executing the action.  
- **ConsumeCurrencyValue** (`int64`): Amount of currency to deduct when the action is performed.  

## 📚 References

- [FB1Condition](./FB1Condition.md)
- [EB1BaseObject](../Enum/EB1BaseObject.md)
- [EB1ActionType](../Enum/EB1ActionType.md)