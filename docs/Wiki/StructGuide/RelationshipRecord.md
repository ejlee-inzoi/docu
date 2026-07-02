# 📘 RelationshipRecord Data Guide

## 🧩 Struct: FB1RelationshipRecordTableRow

Defines a record or event that happened between characters in a relationship.

### Properties

- **Id** (`FName`): Unique identifier for the record entry.  
- **bIsImportant** (`bool`): If true, this record is flagged as significant.  
- **Icon** (`TSoftObjectPtr<UObject>`): Icon displayed with the record. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **TooltipTextId** (`FString`): Localized tooltip text shown in the UI. *(StringTableKey)*  
- **DataList** (`TArray<FB1RelationshipRecordBundleData>`): Display text associated with the record.  


## 📚 References

- [FB1RelationshipRecordBundleData](./Struct/FB1RelationshipRecordBundleData.md)
