# 📘 MeshSpawnTag Data Guide

## 🧩 Struct: FB1MeshSpawnTagTableRow

Defines a tag-based mapping used to spawn mesh variants based on city-specific configurations.

### Properties

- **Id** (`FName`): Tag identifier for the mesh spawn rule.  
- **DefaultMeshId** (`FName`): Default mesh to spawn when no city-specific match is found. *(Foreign = "DA_Spawner.Id")*  
- **MeshDescriptionIds** (`TMap<FName, FName>`): Mapping of city names to their associated mesh IDs. *(Foreign = "DA_Spawner.Id")*  
