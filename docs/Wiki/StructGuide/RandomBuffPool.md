# 📘 RandomBuffPool Data Guide

## 🧩 Struct: FB1RandomBuffPoolTableRow

Defines a random buff pool where one or more buffs are selected with weighted probability.

### Properties

- **Id** (`FName`): Unique identifier for the buff pool.  
- **RandomBuffPoolData** (`TArray<FB1RandomBuffPoolEntryData>`): Entries representing buffs and their probability weight.  
- **TotalProb** (`int32`): Sum of all weights, used during random selection. *(Computed post-load)*  


## 📚 References

- [FB1RandomBuffPoolEntryData](./Struct/FB1RandomBuffPoolEntryData.md)