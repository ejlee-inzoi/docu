## 🧩 Struct: FB1ChangeMaterialInfo

Defines settings used to change one or more materials on a skeletal or static mesh, specifying the material asset and affected slots.

### Properties

- **ChangeMaterial** (`TSoftObjectPtr<UMaterialInterface>`): The material to apply in place of the original material.  
- **SlotNameList** (`TArray<FName>`): A list of slot names that identify which mesh material slots should be replaced.  
