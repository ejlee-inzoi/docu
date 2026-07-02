# 📘 TargetFilter Data Guide

## 🧩 Struct: FB1TargetFilterTableRow

Defines logic for filtering valid targets in actions, interactions, or scripts.

### Properties

- **Id** (`FName`): Unique identifier for the filter entry.  
- **FilterType** (`EB1TargetFilterType`): Type of filtering logic used (e.g., ObjectId, Character).  
- **ResultType** (`EB1FilterResultType`): What kind of result is returned (e.g., NearTarget, TargetList).  
- **S1** (`FName`): Optional string reference used in the filter. *(SearchLink = FilterType)*  
- **S2** (`FName`): Optional secondary reference used in complex filters.  
- **F1** (`float`): First float parameter used in filtering logic.  
- **F2** (`float`): Second float parameter used in filtering logic.  
- **SearchRange** (`float`): Distance range used for filtering nearby targets.  


## 📚 References

- [EB1TargetFilterType](./Enum/EB1TargetFilterType.md)
- [EB1FilterResultType](./Enum/EB1FilterResultType.md)