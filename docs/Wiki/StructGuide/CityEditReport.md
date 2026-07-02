# 📘 CityEditReport Data Guide

## 🧩 Struct: FB1CityEditReportTableRow

Defines a report entry that aggregates and displays city edit status with associated visuals.

### Properties

- **Id** (`FName`): Unique identifier for the report entry.  
- **TitleTextId** (`FString`): Localization key for the title. *(StringTableKey = "Id")*  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon used for displaying this report in the UI.  
- **SubList** (`TArray<FB1CityEditReportSubList>`): Sub-entries listed within the report.  


## 📚 References

- [FB1CityEditReportSubList](./Struct/FB1CityEditReportSubList.md)