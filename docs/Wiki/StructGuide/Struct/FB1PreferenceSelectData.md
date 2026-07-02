## 🧩 Struct: FB1PreferenceSelectData

Defines selection weight and like probability for a preference during preference assignment.

### Properties

- **PreferenceId** (`FName`): ID of the preference being considered. *(Foreign = "Preference.Id")*  
- **SelectRatio** (`float`): Weight used to determine if this preference is selected.  
- **LikeRatio** (`float`): Probability (0.0–1.0) that the character will like this preference if it is selected. *(ClampMin = 0.0, ClampMax = 1.0)*  

## 📚 References

- [Preference](../Preference.md)