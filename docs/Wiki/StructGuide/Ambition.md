# 📘 Ambition Data Guide

## 🧩 Struct: FB1AmbitionTableRow

Defines a top-level ambition configuration, including display texts, visuals, and linked ambition items.

### Properties

- **Id** (`FName`): Unique identifier for the ambition. *(L10N_Name = DisplayTextId, L10N_Desc = DescTextId)*  
- **DisplayTextId** (`FString`): Localization key for the ambition’s display name. *(StringTableKey = "Id")*  
- **DescTextId** (`FString`): Localization key for the ambition’s description. *(StringTableKey = "Id")*  
- **MottoTextId** (`FString`): Localization key for the motto shown in UI. *(StringTableKey)*  
- **JoyCardPopupTextId** (`FString`): Popup text when ambition appears on joy card. *(StringTableKey)*  
- **CompletePopupTextId** (`FString`): Text shown upon ambition completion. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): UI icon representing the ambition.  
- **Bg** (`TSoftObjectPtr<UTexture2D>`): Background image for ambition display.  
- **ColorId** (`FName`): UI color scheme ID. *(Foreign = "ColorMapping.Id")*  
- **CompleteLinkTraitId** (`FName`): Trait granted when ambition is completed. *(Foreign = "Trait.Id")*  
- **AmbitionItemIds** (`TArray<FName>`): List of ambition data IDs associated with this ambition. *(Foreign = "AmbitionItem.Id")*  
