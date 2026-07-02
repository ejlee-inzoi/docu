# 📘 CrowdGrabObject Data Guide

## 🧩 Struct: FB1CrowdGrabObjectTableRow

Defines the probability of crowd agents selecting certain objects based on age and gender.

### Properties

- **Id** (`FName`): Unique identifier for this crowd grab object entry.  
- **GrowthStep** (`EB1GrowthStep`): Growth stage required for selection (e.g., Youth, Adult).  
- **GenderType** (`EB1GenderType`): Gender filter for crowd selection.  
- **CrowdObjectWeightList** (`TArray<FB1CrowdGrabObjectWeight>`): List of weighted object candidates.  
- **TotalWeight** (`int32`): Sum of weights for internal randomization logic. *(auto-calculated)*  


## 📚 References

- [FB1CrowdGrabObjectWeight](./Struct/FB1CrowdGrabObjectWeight.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)
- [EB1GenderType](./Enum/EB1GenderType.md)