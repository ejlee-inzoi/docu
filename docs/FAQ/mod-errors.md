# Mod Error Codes (`EB1ModError`)

This document summarizes the error codes and their causes when mod inspection (compatibility check) fails.

!!! info "Definition location"
    `Source/BlueModManager/ModSystem/B1Mod.h`

!!! danger "Fatal error"
    When a **Fatal error** (`ConfigError`) occurs, the mod is blocked from Manifest saving and activation.

---

**1.Error code list**

| Code | Display name | Fatal |
|:-----|:-------------|:-----:|
| `ConfigError` | Config Error | :material-alert-circle:{ .fatal } **Fatal** |
| `PakFileNotFound` | *(No popup)* | — |
| `UcasFileNotFound` | *(No popup)* | — |
| `UtocFileNotFound` | *(No popup)* | — |
| `PakMountError` | *(No popup)* | — |
| `PakUnMountError` | *(No popup)* | — |
| `DataPatchError` | Data Error | — |
| `ShaderCompatibilityError` | Shader Compatibility Error | — |
| `AssetCompatibilityError` | Asset Compatibility Error | — |
| `LuaScriptError` | Lua Script Error | — |
| `OldModKitVersion` | Old ModKit Version | — |

---

**2.Detailed descriptions**

**`ConfigError`** 

**Cause**: The mod's base configuration file cannot be loaded.

| Trigger | Details |
|:--------|:--------|
| `mod_manifest.json` load/parse failure | Manifest file is corrupted or does not exist |
| Mod name and project name mismatch | Name in manifest differs from `.uplugin` file name |
| `.uplugin` file load/parse failure | Plugin descriptor is corrupted or does not exist |

---

**`PakFileNotFound` / `UcasFileNotFound` / `UtocFileNotFound`**

**Cause**: Mod package file structure validation failed.

| Error | Details |
|:------|:--------|
| `PakFileNotFound` | `.pak` file does not exist |
| `UcasFileNotFound` | `.ucas` file does not exist |
| `UtocFileNotFound` | `.utoc` file does not exist |

---

**`PakMountError` / `PakUnMountError`**

**Cause**: Pak file mount/unmount runtime failure.

| Error | Details |
|:------|:--------|
| `PakMountError` | `FPakPlatformFile::Mount()` call failed — pak file is corrupted or locked by another process |
| `PakUnMountError` | `FPakPlatformFile::Unmount()` call failed — already unmounted or references remain |

---

**`DataPatchError`**

**Cause**: An error occurred while processing the mod's JSON data patch.

| Scenario | Details |
|:---------|:--------|
| Source JSON not found | Cannot find the original data (StructTag-based) to patch |
| Named source JSON not found | Cannot find the specified named data source |
| Invalid JSON value | Patch descriptor contains an invalid JSON value |
| Patch descriptor load failure | Failed to load `FModPatchDescriptor` |
| Patch application error | Patch commands (Add/Remove/Replace, etc.) failed to apply to target data |
| Patch result deserialization failure | Failed to convert patched JSON to struct |


---

**`ShaderCompatibilityError`**

**Cause**: Shaders included in the mod are incompatible with the current game build.

---

**`AssetCompatibilityError`**

**Cause**: Mod assets are incompatible with the current game build.

| Scenario | Details |
|:---------|:--------|
| Asset Hash JSON missing | Contains MPC assets but hash file is missing |
| MPC GUID mismatch | `MaterialParameterCollection` `StateId` differs from the game |
| MPC path invalid/load failure | Asset hash JSON contains an invalid MPC path |
| Material structure hash mismatch | Material parameter structure has changed (e.g. game update) |
| Material path invalid/load failure | Material asset does not exist |
| MFI hash mismatch | `MaterialFunctionInstance` structure has changed |
| MFI path invalid/load failure | MFI asset does not exist |
| DA exists as pak asset | DataAsset is packaged as a pak asset instead of JSON |
| AnimMontage Notify class load failure | Notify class referenced by montage does not exist |
| AnimMontage Notify property mismatch | Notify class properties differ from the game (added/removed) |

---

**`LuaScriptError`** 

**Cause**: Lua script validation failed for the mod.

| Scenario | Details |
|:---------|:--------|
| `.lua`/`.luapak` mixed usage | Both formats used simultaneously in one mod |
| Static analysis (luacheck) execution failure | Error occurred while running the analysis tool |
| Analysis result file missing | Analysis output file was not generated |
| Analysis result parse failure | Output JSON file has an invalid format |
| Lua diagnostic error detected | Static analysis found error-level diagnostic results |

---

**- `OldModKitVersion`**

**Cause**: The mod was built with an outdated ModKit version.

| Scenario | Details |
|:---------|:--------|
| ModKit changelist below minimum | The second digit (changelist) of the mod version is below the minimum requirement (`11246`) |

!!! note ""
    This check only applies to UE 5.6+ builds.

---

**3.Mod states (`EB1ModState`)**

| State | Description |
|:------|:------------|
| `Active` | Activated and applied to the game |
| `Inspecting` | Compatibility check in progress |
| `Unreachable` | Mod directory is inaccessible |
| `Broken` | Structure is corrupted |
| `RuntimeError` | Deactivated due to inspection failure |
| `AddedInGame` | Mod added in-game |