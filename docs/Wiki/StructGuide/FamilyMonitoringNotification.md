# 📘 FamilyMonitoringNotification Data Guide

## 🧩 Struct: FB1FamilyMonitoringNotificationTableRow

Defines a notification related to family status or events.

### Properties

- **Id** (`FName`): Unique identifier for the notification.  
- **TitleTextId** (`FString`): Notification title. *(StringTableKey = "Id")*  
- **DescTextId** (`FString`): Notification description. *(StringTableKey = "Id")*  
- **Icon** (`TSoftObjectPtr<UObject>`): Notification icon. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **bIsImportantAlert** (`bool`): If true, this notification overrides others when shown.  
