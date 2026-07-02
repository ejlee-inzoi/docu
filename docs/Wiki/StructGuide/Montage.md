# 📘 Montage Data Guide

## 🧩 Struct: FB1MontageTableRow

Defines a montage animation entry composed of sections and animation tracks, along with playback and blending properties.

> 🛈 *This structure is marked `ModHidden`, typically excluded from user-editable modding documentation. Included here per request.*

### Properties

- **Id** (`FName`): Unique identifier for this montage.  
- **GroupName** (`FName`): Group classification for organizing montages logically.  
- **TotalPlayLength** (`float`): Total duration of the montage animation in seconds.  
- **LoopPlayLength** (`float`): Duration of the looping segment (if applicable).  
- **RateScale** (`float`): Multiplier for animation playback speed.  
- **BlendOutTime** (`float`): Time taken to blend out of this montage when interrupted.  
- **bHasRootAnim** (`bool`): Whether the montage contains root motion animation.  
- **Sections** (`TArray<FB1AnimSection>`): Named sections used for timing, looping, or segmentation.  
- **AnimTracks** (`TArray<FB1AnimTrack>`): Tracks of animation sequences layered within the montage.  
- **AnimNotifyEventDatas** (`TArray<TSharedPtr<FB1AnimNotifyEventData_Base>>`): Runtime collection of notify events, such as FX or sound triggers.  
- **AnimCurves** (`TArray<FB1FloatCurve>`): Curves used to control blend weights, timing, or dynamic effects during playback.  


## 📚 References

- [FB1AnimSection](./Struct/FB1AnimSection.md)
- [FB1AnimTrack](./Struct/FB1AnimTrack.md)
- [FB1AnimReferenceInfo](./Struct/FB1AnimReferenceInfo.md)
- [EB1NotyfyType](./Enum/EB1NotyfyType.md)
- [FB1FloatCurve](./Struct/FB1FloatCurve.md)
- [FB1FloatCurveKey](./Struct/FB1FloatCurveKey.md)