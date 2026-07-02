# 📘 VideoChatbot Data Guide

## 🧩 Struct: FB1VideoChatbotTableRow

Defines a chatbot used for video chat bot.

### Properties

- **ScreenImage** (`TSoftObjectPtr<UTexture2D>`): Screen image displayed during the chatbot session.  
- **VoiceIndex** (`int32`): Index used to select the chatbot’s voice.  
- **ChatbotDTMap** (`TMap<FName, FSoftObjectPath>`): A map that links each language's chatbot onboarding dialogue topic name to the corresponding data table asset path for that language.  
