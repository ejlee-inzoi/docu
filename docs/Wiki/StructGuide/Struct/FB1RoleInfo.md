## 🧩 Struct: FB1RoleInfo

Defines a role used in interaction or scenario logic, including conditions.

### Properties

- **Id** (`FName`): Unique identifier for the role.  
- **bIsEssencial** (`bool`): If true, this role is essential and cannot be skipped.  
- **RoleConditions** (`TArray<FB1Condition>`): List of conditions that must be satisfied for the role to activate.  

## 📚 References

- [FB1Condition](./FB1Condition.md)