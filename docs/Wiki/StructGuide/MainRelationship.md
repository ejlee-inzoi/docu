# 📘 MainRelationship Data Guide

## 🧩 Struct: FB1MainRelationshipTableRow

Defines relationship weight settings between key characters, used to balance or refresh the primary relationship stats.

### Properties

- **Id** (`FName`): Unique identifier for this main relationship entry.  
- **bRefresh** (`bool`): If true, the relationship stats are recalculated from this entry.  
- **FriendshipRate** (`int32`): Weight applied to friendship level. *(ClampMin = 0)*  
- **BusinessRate** (`int32`): Weight applied to business connection level. *(ClampMin = 0)*  
- **RomanceRate** (`int32`): Weight applied to romance or intimacy level. *(ClampMin = 0)*  
