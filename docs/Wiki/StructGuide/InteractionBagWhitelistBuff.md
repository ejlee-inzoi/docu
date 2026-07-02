# 📘 InteractionBagWhitelist Data Guide

## 🧩 Struct: FB1InteractionBagWhitelistBuff

Defines which interaction bags are enabled when the character has a buff with a specific tag.

### Properties

- **Id** (`FName`): Unique identifier.  
- **BuffTag** (`FName`): Tag identifying relevant buffs.  
- **InteractionBagIds** (`TArray<FName>`): Interaction bags unlocked by the buff. *(Foreign = "InteractionBag.Id")*  
