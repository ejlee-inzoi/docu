## 🧩 Struct: FB1OverridePostureAnim

This struct is used to override the animation played during a posture transition.
The transition proceeds in the order of: starting from PrevPosture, playing OverrideAnimInfo, and ending in NextPosture.

### Properties

- **PrevPosture** (`FB1OverridePostureState`): The posture state the character is transitioning from.  
- **NextPosture** (`FB1OverridePostureState`): The target posture state that the character will hold after the transition is complete.  
- **OverrideAnimInfo** (`FB1OverridePostureAnimInfo`): The animation to play during this posture change.  

## 📚 References

- [FB1OverridePostureState](./FB1OverridePostureState.md)
- [FB1OverridePostureAnimInfo](./FB1OverridePostureAnimInfo.md)