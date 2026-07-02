## 🧩 Struct: FB1DescriptionId

Represents a localized description entry with optional external web links per locale.

### Properties

- **DescId** (`FName`): Identifier for this description entry.  
- **DescTextId** (`FString`): Localization key for the main descriptive text. *(StringTableKey)*  
- **DescWebLinkMap** (`TMap<FName, FString>`): Map of locale codes to web URLs for extended description or help. *(ModTip = "Language Locale by country Key ISO 639-1")*  
