# 📘 ScheduleInfo Data Guide

## 🧩 Struct: FB1ScheduleInfoTableRow

Defines visual and localized information for schedule entries used in UI or timeline events.

### Properties

- **Id** (`FName`): Unique identifier for the schedule entry.  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Image icon representing this schedule entry.  
- **TitleText** (`FString`): Localized title shown in the UI. *(StringTableKey = "Id")*  
- **DescText** (`FString`): Localized description text shown in the UI. *(StringTableKey = "Id")*  
- **OverideScheduleImage** (`TSoftObjectPtr<UTexture2D>`): Optional override image shown in the schedule viewer.  
- **bIsNeedConvertTitleText** (`bool`): Indicates whether the title text contains format-style placeholders that require conversion.
- **bIsNeedConvertDescText** (`bool`): Indicates whether the body text contains format-style placeholders that require conversion.
