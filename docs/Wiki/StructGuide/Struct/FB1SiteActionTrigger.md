## 🧩 Struct: FB1SiteActionTrigger

Defines the conditions and timing for triggering a site-level action.

### Properties

- **Conditions** (`TArray<FB1Condition>`): List of conditions required for the trigger to activate.  
- **TimeHHMM** (`int32`): Time in HHMM format when the action should trigger.  
- **SiteActionId** (`FName`): ID of the site action to execute if conditions are met. *(Foreign = "SiteAction_Site.Id")*  

## 📚 References

- [FB1Condition](./FB1Condition.md)
- [SiteAction](../SiteAction.md)