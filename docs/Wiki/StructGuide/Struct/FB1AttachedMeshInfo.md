## 🧩 Struct: FB1AttachMeshInfo

Specifies which skeletal mesh to use for a given gender and growth step combination.

### Properties

- **Gender** (`EB1GenderType`): Gender for which this skeletal mesh is intended.  
- **AnimGrowthStep** (`EB1AnimGrowthStep`): Growth step (e.g., Baby, Youth, Adult) this mesh is associated with.  
- **SkeletalMeshAsset** (`TSoftObjectPtr<USkeletalMesh>`): The skeletal mesh asset to be attached.  


## 📚 References

- [EB1GenderType](../Enum/EB1GenderType.md)
- [EB1AnimGrowthStep](../Enum/EB1AnimGrowthStep.md)