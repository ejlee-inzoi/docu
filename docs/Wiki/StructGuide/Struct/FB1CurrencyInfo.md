## 🧩 Struct: FB1CurrencyInfo

Contains metadata and UI information for a currency type.

### Properties

- **NameTextId** (`FString`): Localization key for the currency's name. *(StringTableKey)*  
- **DescTextId** (`FString`): Localization key for the currency's description. *(StringTableKey)*  
- **Icon** (`FName`): ID of the icon used to represent this currency. *(Foreign = "B1Texture2D.Id")*  
- **bPrivateData** (`bool`): If true, the currency is private and not shown in general UI.  
- **bExchangable** (`bool`): If true, the currency can be exchanged for other currencies or goods.  
- **bShopPoint** (`bool`): If true, the currency is used specifically as a shop point or internal store currency.  

## 📚 References

- [B1Texture2D](../B1Texture2D.md)