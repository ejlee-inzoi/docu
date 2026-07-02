# 📘 CurrencyExchange Data Guide

## 🧩 Struct: FB1CurrencyExchangeTableRow

Defines exchange rules for converting between currencies.

### Properties

- **Id** (`FName`): Unique identifier for this exchange entry.  
- **Value** (`double`): Exchange rate value (source → target).  
- **DisplayDecimalPlace** (`int32`): Number of decimal places shown in the UI.  
- **ExchangeRoundType** (`EB1RoundType`): Method used to round currency values.  
- **ExchangeRoundDigits** (`int32`): Number of digits used when rounding.  


## 📚 References

- [EB1RoundType](./Enum/EB1RoundType.md)