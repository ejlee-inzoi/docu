# 📘 SleepwalkingPool Data Guide

## 🧩 Struct: FB1SleepwalkingPoolTableRow

Defines a pool of interaction bags used during sleepwalking sequences.

### Properties

- **Id** (`FName`): Unique identifier for the sleepwalking pool.  
- **InteractionBagIds** (`TArray<FName>`): List of interaction bag IDs available during sleepwalking. *(Foreign = "InteractionBag.Id")*  
