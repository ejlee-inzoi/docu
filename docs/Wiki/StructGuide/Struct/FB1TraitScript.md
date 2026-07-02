## 🧩 Struct: FB1TraitScript

Defines a script-driven trait behavior, including event triggers, conditions, and actions.

### Properties

- **TraitEntryType** (`EB1TraitEntryType`): Type of trait logic this script performs (e.g., Broadcaster, OccasionalBuff).  
- **CheckInterval** (`float`): Interval in seconds between condition checks. *(ClampMin = 0)*  
- **NeedCharacterCount** (`int32`): Minimum number of characters required to activate the trait logic. *(ClampMin = 0)*  
- **CircleConstraintSquared** (`float`): Radius squared used to spatially constrain trait effects.  
- **EventTriggers** (`TArray<FB1TraitEventTrigger>`): Triggers that initiate this trait script.  
- **Conditions** (`TArray<FB1Condition>`): Conditions that must be satisfied for the script to execute.  
- **Executes** (`TArray<FB1Execute>`): List of actions to perform when triggered.  

## 📚 References

- [EB1TraitEntryType](../Enum/EB1TraitEntryType.md)
- [FB1TraitEventTrigger](./FB1TraitEventTrigger.md)
- [FB1Condition](./FB1Condition.md)
- [FB1Execute](./FB1Execute.md)
