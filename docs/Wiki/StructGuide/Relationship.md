# 📘 Relationship Data Guide

## 🧩 Struct: FB1RelationshipTableRow

Defines a relationship type (e.g., Friend, Rival, Partner) with UI and FX data.

### Properties

- **Id** (`FName`): Unique identifier for this relationship.  
- **IconId** (`FName`): Icon displayed for this relationship in the UI. *(Foreign = "B1Texture2D.Id")*  
- **CategoryId** (`FName`): Relationship category this belongs to. *(Foreign = "RelationshipCategory.Id")*  
- **DisplayNameTextId** (`FString`): Localized name for the relationship. *(StringTableKey = "Id")*  
- **DescTextId** (`FString`): Localized description of the relationship. *(StringTableKey = "Id")*  
- **ColorId1 / ColorId2** (`FName`): UI colors associated with the relationship. *(Foreign = "ColorMapping.Id")*  
- **RelationshipFx** (`FB1RelationshipFxSet`): Visual FX triggered by this relationship.  


## 📚 References

- [FB1RelationshipFxSet](./Struct/FB1RelationshipFxSet.md)