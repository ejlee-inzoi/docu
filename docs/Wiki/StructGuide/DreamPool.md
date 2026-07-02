# 📘 DreamPool Data Guide

## 🧩 Struct: FB1DreamPoolTableRow

Defines a pool of dream sequences that can be selected during sleep simulation.

### Properties

- **Id** (`FName`): Unique identifier for the dream pool.  
- **SleepwalkingPoolId** (`FName`): Optional pool ID linked to sleepwalking behavior. *(Foreign = "SleepwalkingPool.Id")*  
- **DreamSequenceIds** (`TArray<FName>`): List of dream sequence IDs included in this pool. *(Foreign = "DreamSequence.Id")*  

