## 🎛️ Enum: EB1GarmentCoveringRegion

Defines bitflag-based regions of the body used to indicate which areas a garment covers.

#### Values

- **None**: No coverage.
- **LeftShoulder**: Covers the left shoulder.
- **RightShoulder**: Covers the right shoulder.
- **LeftArmUpper**: Covers the upper part of the left arm.
- **RightArmUpper**: Covers the upper part of the right arm.
- **LeftArmLower**: Covers the lower part of the left arm.
- **RightArmLower**: Covers the lower part of the right arm.
- **LeftSide**: Covers the left side of the torso.
- **RightSide**: Covers the right side of the torso.
- **Chest**: Covers the chest area.
- **Back**: Covers the back area.
- **BellyUpper**: Covers the upper belly.
- **BellyLower**: Covers the lower belly.
- **WaistBack**: Covers the back of the waist.
- **Buttocks**: Covers the buttocks.
- **LeftThigh**: Covers the left thigh.
- **RightThigh**: Covers the right thigh.
- **LeftShin**: Covers the left shin.
- **RightShin**: Covers the right shin.
- **LeftAnkle**: Covers the left ankle.
- **RightAnkle**: Covers the right ankle.
- **LeftFoot**: Covers the left foot.
- **RightFoot**: Covers the right foot.
- **LeftHand**: Covers the left hand.
- **RightHand**: Covers the right hand.
- **NeckFront**: Covers the front of the neck.
- **NeckBack**: Covers the back of the neck.
- **PantsWaist**: Covers the pants waist area.
- **NeckTight**: Covers tight neck-fitting regions.
- **LeftAnkleLow**: Covers the lower left ankle.
- **RightAnkleLow**: Covers the lower right ankle.

#### Composite Flags

These define combinations of base flags for common garment regions:

- **LeftArmShort**: `LeftShoulder | LeftArmUpper`
- **RightArmShort**: `RightShoulder | RightArmUpper`
- **LeftArm**: `LeftArmShort | LeftArmLower`
- **RightArm**: `RightArmShort | RightArmLower`
- **Shoulders**: `LeftShoulder | RightShoulder`
- **ArmsAll**: `LeftArm | RightArm`
- **ArmsAllShort**: `LeftArmShort | RightArmShort`
- **Gloves**: `LeftHand | RightHand`
- **UpperBodyShort**: `LeftSide | RightSide | Back`
- **UpperBodyShortClosed**: `UpperBodyShort | Chest`
- **UpperBody**: `UpperBodyShort | WaistBack`
- **UpperBodyClosed**: `UpperBody | Chest | BellyUpper`
- **Waist**: `BellyUpper | WaistBack`
- **BackBody**: `Back | WaistBack`
- **BackAndArms**: `Back | ArmsAll`
- **LeftLeg**: `LeftThigh | LeftShin`
- **RightLeg**: `RightThigh | RightShin`
- **BottomShort**: `BellyLower | Buttocks`
- **BottomMid**: `BottomShort | LeftThigh | RightThigh`
- **BottomLong**: `BottomMid | LeftShin | RightShin`
- **Shoes**: `LeftFoot | RightFoot`
- **SocksShort**: `Shoes`
- **SocksMid**: `SocksShort | LeftAnkle | RightAnkle | LeftAnkleLow | RightAnkleLow`
- **SocksLong**: `SocksMid | LeftShin | RightShin`
- **WholeBody**: Covers the full body