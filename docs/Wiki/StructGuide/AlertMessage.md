# 📘 AlertMessage Data Guide

## 🧩 Struct: FB1AlertMessageTableRow

Defines a message that can be displayed to the user in the form of a title and description.

### Properties

- **Id** (`FName`): Unique identifier for the alert message. *(L10N_Name = Title, L10N_Desc = Desc)*  
- **Title** (`FString`): Localization key for the message title. *(StringTableKey)*  
- **Desc** (`FString`): Localization key for the message description. *(StringTableKey)*  

## 📚 References

- [EB1AlertType](./Enum/EB1AlertType.md)