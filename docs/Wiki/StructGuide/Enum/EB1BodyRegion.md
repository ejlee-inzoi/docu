## 🧍 Enum: EB1BodyRegion

Defines specific or grouped body regions using bitmask values for visual effects, customization, or clothing logic.

### Values

- **None**: No body region selected.  
- **ChestUpper**: Upper part of the chest.  
- **ChestMid**: Middle part of the chest.  
- **LeftShoulder**: Left shoulder area.  
- **LeftArmUpper**: Upper left arm.  
- **LeftElbow**: Left elbow joint.  
- **LeftWrist**: Left wrist.  
- **RightShoulder**: Right shoulder area.  
- **RightArmUpper**: Upper right arm.  
- **RightElbow**: Right elbow joint.  
- **RightWrist**: Right wrist.  
- **LeftHand**: Left hand.  
- **RightHand**: Right hand.  
- **ChestLower**: Lower part of the chest.  
- **BellyUpper**: Upper belly/abdomen.  
- **BackUpper**: Upper back area.  
- **WaistBack**: Back side of the waist.  
- **Pelvis**: Pelvic region.  
- **Crotch**: Crotch area.  
- **LeftThighUpper**: Upper part of the left thigh.  
- **LeftThighLower**: Lower part of the left thigh.  
- **LeftKnee**: Left knee.  
- **LeftShin**: Left shin.  
- **LeftFoot**: Left foot.  
- **LeftToe**: Toes of the left foot.  
- **RightThighUpper**: Upper part of the right thigh.  
- **RightThighLower**: Lower part of the right thigh.  
- **RightKnee**: Right knee.  
- **RightShin**: Right shin.  
- **RightFoot**: Right foot.  
- **RightToe**: Toes of the right foot.  
- **WaistLower**: Lower part of the waist.  
- **BellyLower**: Lower abdomen.  

### Predefined Combinations

- **LeftArmShort**: Left shoulder + upper arm.  
- **RightArmShort**: Right shoulder + upper arm.  
- **LeftArmMid**: Left shoulder, upper arm, and elbow.  
- **RightArmMid**: Right shoulder, upper arm, and elbow.  
- **LeftArm**: Full left arm (shoulder to wrist).  
- **RightArm**: Full right arm (shoulder to wrist).  
- **Shoulders**: Both left and right shoulders.  
- **ArmsAll**: Full left and right arms.  
- **ArmsAllMid**: Both arms up to elbows.  
- **ArmsAllShort**: Both upper arms.  
- **Gloves**: Both hands.  
- **UpperBodyShort**: Upper back only.  
- **UpperBodyShortClosed**: Back + chest upper & mid.  
- **UpperBody**: Upper back + waist.  
- **UpperBodyClosed**: Full chest, back, and waist.  
- **Waist**: Belly upper + waist back.  
- **LowerWaist**: Belly lower + waist lower.  
- **BackBody**: Upper back + waist back.  
- **BackAndArms**: Back + both arms.  
- **BottomMinimal**: Pelvis + crotch.  
- **BottomShort**: Minimal bottom + upper thighs.  
- **BottomHalf**: Adds lower thighs to bottom short.  
- **BottomMid**: Adds knees to bottom half.  
- **BottomLong**: Adds shins to bottom mid.  
- **Shoes**: Toes only.  
- **Socks**: Shoes + feet.  
- **SocksLong**: Socks + shins.  
- **Boots**: Same as socks.  
- **BootsLong**: Same as socks long.  
- **WholeBody**: All body regions (bitmask full).  
- **MAX**: Alias for `WholeBody`.  
