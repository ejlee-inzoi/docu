## 🧩 Struct: FB1CityEditChangeListInfo

Defines a city edit entry that includes mesh and material overrides, icon info, categorization, and UI data for seasonal decoration variants.

### Properties

- **Id** (`FName`): Unique identifier for the change list entry.  
- **ListKey** (`FString`): Internal key used for grouping or data lookups.  
- **CategoryType** (`FName`): Type/category of the decoration (e.g., tree, cat).  
- **DecorationId** (`FName`): Identifier for the associated decoration item.  
- **DisplayNameTextId** (`FString`): Localization key for the display name of this entry. *(StringTableKey = "Id")*  
- **TooltipTextId** (`FString`): Localization key for the tooltip text of this entry. *(StringTableKey = "Id")*  
- **IconTexture** (`TSoftObjectPtr<UTexture2D>`): Texture used as an icon for this item in the UI.  
- **ChangeList** (`TArray<FB1CityEditChangeList>`): List of mesh changes that apply seasonally.  
- **PartsList** (`TArray<FB1CityEditPartsList>`): List of sub-part definitions that belong to this change item.  
- **bResetMaterial** (`bool`): If true, the material will be reset to default when applying this item.  
- **bUseMaterial** (`bool`): If true, this entry uses a custom material definition.  
- **bSpawnCountIsolrate** (`bool`): If true, this item limits the spawn count to avoid overlap with others.  
- **SpriteTexture** (`TSoftObjectPtr<UTexture2D>`): Texture variable to be passed to the material.  
- **URL** (`FString`): Optional external URL (e.g., YouTube void URL).  


## 📚 References

- [FB1CityEditChangeList](./FB1CityEditChangeList.md)
- [FB1CityEditPartsList](./FB1CityEditPartsList.md)