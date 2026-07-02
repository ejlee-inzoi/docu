# B1AnimNotify_ChangeMaterialParam

**File:** `BlueClient2/Source/BlueClient/Animation/AnimNotifies/B1AnimNotify_ChangeMaterialParam.h / .cpp`
**Base Class:** `UAnimNotify`

## Purpose

Changes a material parameter (scalar, color, or texture) on a target object's mesh at the notify frame.

## How to Add in the Editor

1. Open an **Animation Montage** or **Animation Sequence**.
2. Right-click on the **Notify track** → **Add Notify** → `B1AnimNotify_ChangeMaterialParam`.
3. Configure the properties below in the **Details panel**.

## Editor Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `Target` | `EB1BaseObject` | `Target` | Which object's material to modify: `Self` or `Target` (interaction target) |
| `MaterialSlotName` | `FName` | — | Slot name of the material to modify on the mesh |
| `ParameterName` | `FName` | — | Name of the material parameter to change |
| `ParameterType` | `EB1MaterialParamType` | `Scalar` | One of `Scalar`, `Color`, or `Texture` |
| `ScalarValue` | `float` | 0.0 | Value to set when `ParameterType == Scalar` |
| `ColorValue` | `FLinearColor` | — | Value to set when `ParameterType == Color` |
| `TextureValue` | `TSoftObjectPtr<UTexture>` | — | Value to set when `ParameterType == Texture` |

> `ScalarValue`, `ColorValue`, and `TextureValue` use `EditCondition` — only the field matching `ParameterType` is editable in the Details panel.

## Behavior

At the notify frame, finds the Dynamic Material Instance on the specified slot of the target object's mesh, then calls:
- `SetScalarParameterValue` when `ParameterType == Scalar`
- `SetVectorParameterValue` when `ParameterType == Color`
- `SetTextureParameterValue` when `ParameterType == Texture`
