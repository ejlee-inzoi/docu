# 📘 CatShop Data Guide

## 🧩 Struct: FB1CatShopTableRow

Defines a purchasable item entry in the cat shop system, including display info, icon, and logic trigger.

### Properties

- **Id** (`FName`): Unique identifier for this shop item. *(L10N_Name = NameTextId, L10N_Desc = DescTextId)*  
- **NameTextId** (`FString`): Localization key for the name shown in the shop UI. *(StringTableKey = "Id")*  
- **DescTextId** (`FString`): Localization key for the item description. *(StringTableKey = "Id")*  
- **EffectTextId** (`FString`): Localization key for describing what the item does. *(StringTableKey = "Id")*  
- **Icon** (`FName`): ID of the icon texture representing the item. *(Foreign = "B1Texture2D.Id")*  
- **Price** (`int64`): In-game cost of the item.  
- **ScriptId** (`FName`): Script executed when the item is purchased. *(Foreign = "Script.Id")*  
