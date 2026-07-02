# 📘 MaterialParamMapping Data Guide

## 🧩 Struct: FB1MaterialParamMappingTableRow

Defines how a specific material parameter is applied to a mesh with optional layer and name targeting.

### Properties

- **Id** (`FName`): Unique identifier for this mapping entry.  
- **ParamType** (`EB1MaterialParamType`): Type of parameter (e.g., Scalar, Vector).  
- **MeshName** (`FName`): Name of the mesh the parameter applies to.  
- **LayerIndex** (`float`): Layer index for applying the parameter.  
- **ParamName** (`FName`): Name of the parameter to modify.  
- **ValueString** (`FString`): String representation of the value assigned (parsed at runtime).  
