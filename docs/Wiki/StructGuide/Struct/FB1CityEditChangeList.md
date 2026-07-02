## 🧩 Struct: FB1CityEditChangeList

Represents a change list used to replace meshes based on season within the city editing system.

### Properties

- **OriginMesh** (`TSoftObjectPtr<UStaticMesh>`): The original static mesh to be replaced in seasonal variants.  
- **ChangeMeshInfoBySeason** (`TArray<FB1ChangeMeshInfo>`): List of seasonal mesh replacements and their associated material overrides.  

## 📚 References

- [FB1ChangeMeshInfo](./FB1ChangeMeshInfo.md)