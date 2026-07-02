## 🧩 Struct: FB1AccessoryMaterialSectionGroup

Data for material sections of an accessory, including customizable channels and material types.

### Properties

- **ListKey** (`FString`): Identifier for materials in the accessory with multiple materials.  
- **MaterialSection** (`int`): Index of the material section applied in the accessory.  
- **MaterialType** (`EB1AccessoryMaterialType`): Material type for each section of an accessory with multiple materials (e.g., accessory, jewelry, hair).  
- **NumColorChannels** (`int`): Number of channels that can be customized for the accessory.  
- **ChannelDatas** (`TArray<FB1AttachedAccessoryChannelData>`): List of channels that segment the material into customizable parts, enabling color and material customization for each segment of the accessory.  

## 📚 References

- [EB1AccessoryMaterialType](../Enum/EB1AccessoryMaterialType.md)
- [FB1AttachedAccessoryChannelData](./FB1AttachedAccessoryChannelData.md)