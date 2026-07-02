# 📘 Rumor Data Guide

## 🧩 Struct: FB1RumorTableRow

Defines a rumor that spreads through conversation or event chains, with associated logic and scripts.

### Properties

- **Id** (`FName`): Unique identifier for the rumor.  
- **DescTextId** (`FString`): Localized description of the rumor. *(StringTableKey = "Id")*  
- **IsTransferByTalk** (`bool`): If true, the rumor spreads through conversation.  
- **Duration** (`float`): Lifetime of the rumor in simulation time.  
- **Strength** (`int32`): Intensity or credibility of the rumor.  
- **PositiveRatio / NegativeRatio** (`float`): Percent chance of the rumor being perceived positively or negatively. *(ClampMin = 0.0)*  
- **ScriptIds** (`TArray<FName>`): Scripts triggered by the rumor. *(Foreign = "Script_Rumor.Id")*  
- **RumorEventIds** (`TArray<FName>`): Events associated with the rumor. *(Foreign = "RumorEvent.Id")*  


