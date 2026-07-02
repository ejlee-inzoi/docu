## 🧩 Struct: FB1PreferenceReward

Defines a reward applied based on a character's preference during interactions.

### Properties

- **PreferenceId** (`FName`): ID of the preference that this reward is associated with. *(Foreign = "Preference.Id")*  
- **IsLike** (`bool`): If true, the preference is liked; otherwise, it is disliked.  
- **Bonus** (`int32`): Bonus value granted based on the preference condition.  

## 📚 References

- [Preference](../Preference.md)