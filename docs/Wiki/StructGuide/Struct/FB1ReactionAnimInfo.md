## 🧩 Struct: FB1ReactionAnimInfo

Defines animation data for reaction behavior between self and target.

### Properties

- **SelfAnimId** (`FName`): Animation ID for the reacting character.  
  *(ModTip = "References CharacterAnim, GameObjectAnim Json Files")*  
- **TargetAnimId** (`FName`): Animation ID for the target character.  
  *(ModTip = "References CharacterAnim, GameObjectAnim Json Files")*  
- **NeedStop** (`bool`): If true, Character stops, turns to face target, plays full-body animation. If false, Character continues moving, plays upper-body animation only. 
