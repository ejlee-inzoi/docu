# 📘 RelationshipCategory Data Guide

## 🧩 Struct: FB1RelationshipCategoryTableRow

Defines metadata for a category of relationships, including exclusivity and decay behavior.

### Properties

- **Id** (`FName`): Unique identifier for the relationship category.  
- **IsUniqueInCategory** (`bool`): If true, only one relationship of this category may exist.  
- **IsDeleteByDecay** (`bool`): If true, relationships in this category decay and are deleted over time.  
- **DescTextId** (`FString`): Localized description for this category. *(StringTableKey = "Id")*  
