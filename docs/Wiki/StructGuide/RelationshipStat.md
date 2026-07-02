# 📘 RelationshipStat Data Guide

## 🧩 Struct: FB1RelationshipStatTableRow

Defines a relationship stat (e.g., affection, rivalry) and how it changes over time.

### Properties

- **Id** (`FName`): Unique identifier for the stat.  
- **DisplayNameTextId** (`FString`): UI label for the stat. *(StringTableKey = "Id")*  
- **DefaultDecayValuePerSec** (`float`): How quickly the stat decays over time.  
- **GrowthStep** (`EB1GrowthStep`): Age this stat applies to.  
- **DecayDataList** (`TArray<FB1RelationshipDecayData>`): Customized decay rules based on thresholds.  
- **PositiveAsset / NegativeAsset / BackgroundAsset** (`TSoftObjectPtr<UObject>`): UI visuals effect associated with this stat.  


## 📚 References

- [FB1RelationshipDecayData](./Struct/FB1RelationshipDecayData.md)
- [EB1GrowthStep](./Enum/EB1GrowthStep.md)