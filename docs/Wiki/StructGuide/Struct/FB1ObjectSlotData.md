## 🧩 Struct: FB1ObjectSlotData

Defines display and masking behavior for a parent mesh in an object slot.

### Properties

- **HideParentMesh** (`bool`): A boolean flag indicating whether to utilize a masked texture from the parent mesh's material.  
- **UseMaskedParentMesh** (`bool`): A boolean flag that controls the visibility of the parent mesh, likely used to prevent visual overlap..  
- **MaskParameterName** (`FName`): The name of the texture parameter in the material used to retrieve the mask texture. (e.g., Opacity). *(EditCondition = "UseMaskedParentMesh")*  
- **BasicTexture** (`UTexture*`): The actual texture asset extracted from the parent mesh's material, used for masking purposes.  
