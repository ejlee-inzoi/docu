## 🧩 Struct: FB1DepartmentKey

Defines a unique key used to identify a specific department role, including job ID, rank, and shift.

### Properties

- **JobId** (`FName`): Identifier for the job associated with this department key. *(Foreign = "Job.Id")*  
- **Rank** (`int32`): Rank level of the employee or role in the department.  
- **ShiftIndex** (`int32`): Work shift index associated with this role.  

## 📚 References

- [Job](../Job.md)