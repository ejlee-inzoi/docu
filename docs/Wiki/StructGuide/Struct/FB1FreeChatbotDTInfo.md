## 🧩 Struct: FB1FreeChatbotDTInfo

Holds references to various chatbot data tables categorized by type.

### Properties

- **Language** (`FName`): Language key this chatbot info applies to.  
- **ChatbotDT_FAQ** (`FSoftObjectPath`): Data table for FAQ-style chatbot entries. *(AllowedClasses = DataTable)*  
- **ChatbotDT_Casual** (`FSoftObjectPath`): Data table for casual/free chat entries. *(AllowedClasses = DataTable)*  
- **ChatbotDT_Embed** (`FSoftObjectPath`): Data Table that contains information with embedded question representations. *(AllowedClasses = DataTable)*  
