# 📘 TraitSelect3 Data Guide

## 🧩 Struct: FB1TraitSelect3TableRow

Defines selectable traits shown to the player in a grouped UI format.

### Properties

- **Id** (`FName`): Unique identifier for the trait selection group. *(L10N_Name = TraitCategoryTextId)*  
- **TraitCategoryTextId** (`FString`): Localized title for this group of traits. *(StringTableKey = "Id")*  
- **TraitIds** (`TArray<FName>`): List of traits included in this group. *(Foreign = "Trait.Id")*  
