# 📘 ChoiceCard Data Guide

## 🧩 Struct: FB1ChoiceCardTableRow

Defines a choice card entry used in gameplay decisions, including conditions, answers, and display configuration.

### Properties

- **Id** (`FName`): Unique identifier for the choice card.  
- **ConditionId** (`FName`): ID of the condition that enables this choice card. *(Foreign = "ChoiceCardCondition.Id")*  
- **TitleStrId** (`FString`): Localization key for the title text. *(StringTableKey)*  
- **MessageStrId** (`FString`): Localization key for the body message. *(StringTableKey)*  
- **ColorId** (`FName`): Background color of choice card used for UI representation. *(Foreign = "ColorMapping.Id")*  
- **AudioId** (`FName`): Audio resource played when the choice card appears. *(Foreign = "AudioResources.Id")*  
- **PositiveAnswerConditionId** (`FName`): Condition required to enable positive answers. *(Foreign = "ChoiceCardCondition.Id")*  
- **PositiveAnswerStrId** (`FString`): Text shown for the positive answer button. *(StringTableKey)*  
- **PositiveChoiceCardAnswers** (`TArray<FB1ChoiceCardAnswer>`): List of positive answer options.  
- **NegativeAnswerConditionId** (`FName`): Condition required to show negative answer options. *(Foreign = "ChoiceCardCondition.Id")*  
- **NegativeTitleStrId** (`FString`): Text shown for the negative answer button. *(StringTableKey)*  
- **NegativeChoiceCardAnswers** (`TArray<FB1ChoiceCardAnswer>`): List of negative answer options.  


## 📚 References

- [FB1ChoiceCardAnswer](./Struct/FB1ChoiceCardAnswer.md)