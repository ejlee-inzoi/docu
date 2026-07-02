# 📘 Book Data Guide

## 🧩 Struct: FB1BookTableRow

Defines properties and logic tied to books used in gameplay, including skill training and interaction.

### Properties

- **Id** (`FName`): Unique identifier for the book.  
- **ObjectId** (`FName`): ID of the physical object representing the book. *(Foreign = "Object.Id")*  
- **InteractionTags** (`TArray<FName>`): Tags that categorize the book's interactions. *(Foreign = "Interaction.Tags")*  
- **TotalReadTime** (`int32`): Time required to finish reading the book (minutes)  
- **SkillId** (`FName`): Skill improved by reading the book. *(Foreign = "Skill.Id")*  
- **RequireSkillLevel** (`int32`): Required level of the skill to acquire the skillId. Applies only if the corresponding skillId is valid.
- **TotalSkillExp** (`int32`): Amount of experience awarded upon completion. Applies only if the corresponding skillId is valid. 
- **StartScriptId** (`FName`): Script executed when reading begins. *(Foreign = "Script_Book.Id")*  
- **TickScriptId** (`FName`): Script executed during reading. *(Foreign = "Script_Book.Id")*  
- **FinishScriptId** (`FName`): Script executed upon completion. *(Foreign = "Script_Book.Id")*  
