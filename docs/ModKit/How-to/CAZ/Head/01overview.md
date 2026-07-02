# Overview

This document describes the complete workflow for modding inZOI character faces using **MetaHuman Editor** in Unreal Engine 5, and registering the finished assets in the **ModKit**.

!!! warning "MetaHuman Editor Limitations"
    Options set in the **Materials** and **Hair & Clothing** tabs of MetaHuman Editor are not reflected in the inZOI ModKit.

    - Skin-related settings → Proceed separately via the **Skin Modding** workflow<br>
      [Project > CAZ > Skin > Overview](https://mod-docs.playinzoi.com/ModKit/project/CAZ/Skin/01.Overview.html)

    - Hair-related settings → Proceed separately via the **Hair Modding** workflow<br>
      [Project > CAZ > Hair > Overview](https://mod-docs.playinzoi.com/ModKit/project/CAZ/Hair/01.Overview.html)

---

**1. Create a Project Folder**

Create a new folder at your desired path in the Content Browser.

!!! info
    Any folder inside Content will work. Remember this path, as you will use the same one during the Assemble step later.

![Create a Project Folder](../../../../media/Modkit/Caz/Head/Meta56/Meta56_01.png){ width="1000" loading="lazy" }

---

**2. Create a MetaHuman Character**

Right-click in the folder you created and select **MetaHuman → MetaHuman Character** to create and name your character.

![Create a MetaHuman Character](../../../../media/Modkit/Caz/Head/Meta56/Meta56_02.png){ width="1000" loading="lazy" }

---

**3. Body Conform Setup**

!!! danger "Important: You must set up the Body first"
    The Body must be conformed before the Head for everything to work correctly. Reversing the order may cause issues.

Open the MetaHuman character you created and follow the steps below.

1. Select **Body → Conform → From Template**
2. In **Asset → Mesh**, assign the body mesh for the desired gender

  **Male**

    Characters/AvatarParts/Body/Male/Mesh/ModKit

  **Female**

    Characters/AvatarParts/Body/Female/Mesh/ModKit


![Body Conform Setup](../../../../media/Modkit/Caz/Head/Meta56/Meta56_05.png){ width="1000" loading="lazy" }

---

**4. Body Import**

After assigning the body mesh, click the **Import** button.

!!! note
    Leave **Body Fit Options** at the default value: `Fit from Mesh and Skeleton`.

![Body Import](../../../../media/Modkit/Caz/Head/Meta56/Meta56_06.png){ width="1000" loading="lazy" }

---

**5. Head Conform Setup**

1. Select **Head → Conform → From Template**
2. In **Asset → Mesh**, assign the face mesh for the desired gender

Choose from one of the **9 inZOI face types**.

  **Male**

    /All/Game/Characters/AvatarParts/Heads/Male/Male_Head_ModKit/Mesh

  **Female**

    /All/Game/Characters/AvatarParts/Heads/Female/Female_Head_ModKit/Mesh

![Head Conform Setup](../../../../media/Modkit/Caz/Head/Meta56/Meta56_07.png){ width="1000" loading="lazy" }

---

**6. Head Import Option Settings**

After assigning the face mesh, configure the following options under **Import Template Options**, then click **Conform**.

| Option | Value |
|--------|-------|
| **Alignment Options** | `None` |
| **Adapt Neck** | :material-checkbox-blank-outline: Unchecked |

![Head Import Option Settings](../../../../media/Modkit/Caz/Head/Meta56/Meta56_08.png){ width="800" loading="lazy" }

---

**7. Edit the Face (Sculpt / Transform)**

Once the setup is complete, use **Head → Transform / Sculpt** to mod the face.

!!! tip "Editing in Skin Mode"
    Change the **Topology** option at the top to `Skin` to edit in skin mode.

![Edit the Face](../../../../media/Modkit/Caz/Head/Meta56/Meta56_09.png){ width="600" loading="lazy" }
![Edit the Face 2](../../../../media/Modkit/Caz/Head/Meta56/Meta56_10.png){ width="1000" loading="lazy" }
![Edit the Face 3](../../../../media/Modkit/Caz/Head/Meta56/Meta56_11.png){ width="1000" loading="lazy" }

---

**Additional Editable Items**

| Item | Availability |
|------|-------------|
| Teeth | :material-check-circle: Available |
| Eyelashes | :material-check-circle: Unavailable (Transparent) |
| Hair | :material-close-circle: Unavailable |
| Eyebrows | :material-close-circle: Unavailable |

![Teeth](../../../../media/Modkit/Caz/Head/Meta56/Meta56_12.png){ width="1000" loading="lazy" }

---

**8. Download Textures**

Once editing is complete, select the following from the top menu:

> **Download Texture Source → Download 4K Resolution Textures**

![Download Textures](../../../../media/Modkit/Caz/Head/Meta56/Meta56_14.png){ width="1000" loading="lazy" }

---

**9. Create Rig**

After the texture download is complete, click the **Create Joints Only Rig** button to generate the rig.

![Create Rig](../../../../media/Modkit/Caz/Head/Meta56/Meta56_15.png){ width="1000" loading="lazy" }

---

**10. Run Assemble**

Once rigging is complete, navigate to the **Assembly** tab.

1. Set the path in **Targets → Root Directory**.
2. Click the **Assemble** button at the bottom to execute.

!!! tip "Recommended Path"
    It is recommended to use the same path as the folder created in (#1-create-a-project-folder).

![Run Assemble](../../../../media/Modkit/Caz/Head/Meta56/Meta56_16.png){ width="1000" loading="lazy" }

---

**11. Verify the Output**

Once Assemble is complete, a folder will be created at the specified path.

```
Specified Path/
└── Face/
    └── Face Skeletal Mesh
```

![Verify the Output](../../../../media/Modkit/Caz/Head/Meta56/Meta56_17.png){ width="1000" loading="lazy" }

---

**12. Create a Face Project in the ModKit**

In the ModKit, follow the steps below:

- Select a face in the **CREATE A ZOI → CAZ → FACE** tab

![Create a Face Project in the ModKit](../../../../media/Modkit/Caz/Head/Meta56/Meta56_18.png){ width="600" loading="lazy" }

- Create a project with **Create new mod project**

![Create a Face Project in the ModKit](../../../../media/Modkit/Caz/Head/Meta56/Meta56_19.png){ width="1000" loading="lazy" }

---

**13. Move the Face Asset**

Move the face skeletal mesh completed in (#11-verify-the-output) into the mod project you created.

![Move the Face Asset](../../../../media/Modkit/Caz/Head/Meta56/Meta56_20.png){ width="1000" loading="lazy" }

---

**14. Open the ModKit Project**

Open the face modding project from **MY MOD PROJECTS**.

![Open the ModKit Project](../../../../media/Modkit/Caz/Head/Meta56/Meta56_21.png){ width="600" loading="lazy" }

---

**15. Register the Mesh**

Register the completed face skeletal mesh in the **Mesh** field of the face modding project.

![Register the Mesh](../../../../media/Modkit/Caz/Head/Meta56/Meta56_22.png){ width="1000" loading="lazy" }

!!! note "Joint Matching Popup"
    A joint matching popup will appear when the mesh is assigned. Select **Yes**.

![Head Mesh Setup](../../../../media/Modkit/Caz/Head/Meta56/Meta56_24.png){ width="600" loading="lazy" }

!!! danger "Important: Head Mesh Setup"
    The head mesh has changed. The following setup scripts will run on the selected MetaHuman face skeletal mesh:

    1. Skeletal Joint Matching — Recalculates bone correspondence between the reference body and head skeletal meshes and may update bone transforms.
    2. LOD Cleanup — inZOI uses LOD 0–4. MetaHuman assets ship with LOD 0–7, so extra LODs will be removed and the mesh will be reorganized to match the inZOI LOD range.
    3. Material Replacement — Replaces all material slots with the inZOI in-game materials.

    These operations write to skeletal mesh assets. Back up or verify version control state before continuing.

    Do you want to continue?
---

**16. Final Settings**

After registering the mesh, configure the following:

1. Set the **Thumbnail**
2. Select the gender in **Face Properties → Gender Type**

![Final Settings](../../../../media/Modkit/Caz/Head/Meta56/Meta56_23.png){ width="600" loading="lazy" }
