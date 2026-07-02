## 🧩 Struct: FB1InteractionTagInfo

Defines metadata for an interaction tag, including localization and visual icon data.

### Properties

- **ListKey** (`FString`): Internal key used for identifying or grouping this tag.  
- **TagName** (`FName`): Tag identifier used to reference the interaction.  
  *(ModTip = "This data references the following InteractionBag Tag JSON : InteractionBag, InteractionBag_Talk, InteractionBag_Computer, InteractionBag_Recipe, InteractionBag_Karma, and InteractionBag_System")*  
- **NameTextId** (`FString`): Localization key for the tag’s display name. *(StringTableKey)*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): UI icon representing this tag. *(AllowedClasses = Texture2D)*  
