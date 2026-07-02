# 📘 PreferenceRelatedTrait Data Guide

## 🧩 Struct: FB1PreferenceRelatedTraitTableRow

Defines a list of preferences linked to specific traits and how many may be selected.

### Properties

- **Id** (`FName`): Unique identifier for the preference group.  
- **MaxSelectCount** (`int32`): Maximum number of preferences allowed from this group. It is recommended to use a value that is less than or equal to the size of the PreferenceList. *(ClampMin = 0)*  
- **PreferenceList** (`TArray<FB1PreferenceSelectData>`): A list of selectable preferences available when this trait is selected.


## 📚 References

- [FB1PreferenceSelectData](./Struct/FB1PreferenceSelectData.md)