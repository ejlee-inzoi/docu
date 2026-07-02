## 🧩 Struct: FB1JobLevel

Defines a job level entry including experience requirements and conditions for advancement.

### Properties

- **Level** (`int32`): The level index. Must be 0 or higher. *(ClampMin = 0)*  
- **Exp** (`int32`): Experience required to reach next level. Must be at least 1. *(ClampMin = 1)*  
- **EnterLevelConditions** (`TArray<FB1Condition>`): Conditions that must be satisfied in order to enter this level.  

## 📚 References

- [FB1Condition](./FB1Condition.md)