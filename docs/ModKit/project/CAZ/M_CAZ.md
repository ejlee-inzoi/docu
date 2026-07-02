# CAZ Material

**Character Master Material Path**

`/Game/Characters/Materials/MasterMaterials/Common/M_Char_Standard_Master`

---

**Texture Format & Compression Settings**

| Master Instance       | Parameter           | Suffix   | Extension | Channels    | sRGB     | Compression |
|------------------------|--------------------|----------|-----------|-------------|----------|-------------|
| `MI_char_standard`     | RGB Mask Map       | `_M`     | PNG       | RGB         | ❌       | Default     |
|                        | Base Color Map     | `_D`     | TGA       | RGBA        | ✅       | Default     |
|                        | ARM Map            | `_ARM` or `_ARMO` | PNG or TGA | RGB or **RGBA** | ❌ | Default     |
|                        | - Ambient Occlusion|          |           |             | ❌       | Default     |
|                        | - Roughness        |          |           |             | ❌       | Default     |
|                        | - Metallic         |          |           |             | ❌       | Default     |
|                        | - **Opacity (if needed)** |     |           |             | ❌       | Default     |
|                        | Normal Map         | `_N`     | PNG       | RGB         | ❌       | Default     |

---

**MI_Char_Standard Parameters**

<img src="/media/Modkit/Caz_06.jpg" alt="MI_Char_Standard Preview" style="float: left; width: 500px; margin-right: 20px;">

| Parameter                  | Description |
|---------------------------|-------------|
| **RGB Mask Map**          | • A mask map for color variation.<br> • Uses RGB channels to define 3 regions. |
| **Base Color Map**        | • Base color texture.<br> • Alpha channel stores a grayscale base, blended with Custom(R/G/B).<br> • Default grayscale brightness is around 0.65. |
| **Custom Color Intensity**| • Controls whether to use RGB mask-based custom color.<br>  0: Use base color only<br>  1: Use custom color |
| **Custom(R/G/B)**         | • Assigns color to each region of the RGB mask. |
| **Fuzz Area**             | • Defines the fuzz region using RGB mask.<br>  0: None<br>  1: R<br>  2: G<br>  3: B<br>  4: R,G |
| **Fuzz CoreDarkness**     | • Darkness at the center of the fuzz. |
| **Fuzz Power**            | • Strength of the fuzz effect. |
| **Fuzz EdgeBrightness**   | • Brightness of the fuzz edge. |
| **ARM Map**               | • R: Ambient Occlusion<br> • G: Roughness<br> • B: Metallic<br> • A: **Opacity (if needed)** |
| **Normal Map**            | • Normal map texture. |
| **Boots**                 | • Parameter option for long boots (applies to pants only).<br> • See details below. |
| **Emissive Power**        | • Intensity of emissive output. |
| **Enable Emissive(R/G/B)**| • When set to 1, the corresponding RGB mask area becomes emissive. |
| **Fresnel**               | • Enables fresnel highlight for emissive.<br>  0: Off<br>  1: On |
| **ExponentIn**            | • Controls the fresnel intensity range. |
| **BaseReflectFractionIn**| • Controls the overall fresnel reflection effect. |
