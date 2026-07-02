## 🧩 Struct: FB1ChangeMeshInfo

Specifies a mesh replacement and its associated material changes for a particular season.

### Properties

- **SeasonType** (`EB1SeasonType`): The season for which this mesh configuration applies (e.g., Spring, Summer).  
- **ChangeMesh** (`TSoftObjectPtr<UStaticMesh>`): The mesh asset to replace the default one with.  
- **ChangeMaterialInfo** (`TArray<FB1ChangeMaterialInfo>`): List of material change settings to apply to the new mesh.  

## 📚 References

- [EB1SeasonType](../Enum/EB1SeasonType.md)
- [FB1ChangeMaterialInfo](./FB1ChangeMaterialInfo.md)