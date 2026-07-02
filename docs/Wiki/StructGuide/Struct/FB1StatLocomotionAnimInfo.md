## 🧩 Struct: FB1StatLocomotionAnimInfo

Defines locomotion animation settings that are stat-dependent, such as idle or walk animations.

### Properties

- **StatId** (`FName`): Stat that influences this locomotion behavior. *(Foreign = "Stat.Id")*  
- **StatValue** (`float`): Value of the stat that triggers this animation configuration.  
- **IdleRandomAnims** (`TArray<FB1RandomAnimationInfo>`): Set of idle animations selected randomly.  
- **StatWalkAnim** (`TSoftObjectPtr<UAnimSequenceBase>`): Walk animation associated with the stat condition.  
- **MinNormalWalkTime** (`float`): Minimum time to remain in normal walk before transition.  
- **MaxNormalWalkTime** (`float`): Maximum time allowed for normal walk.  
- **bDisableJog** (`bool`): If true, disables jogging and locks to walking animations.  

## 📚 References

- [FB1RandomAnimationInfo](./FB1RandomAnimationInfo.md)
- [Stat](../Stat.md)