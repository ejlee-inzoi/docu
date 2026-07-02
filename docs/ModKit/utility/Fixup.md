# Fix Up

If an existing mod is not compatible with the latest version, you can easily upgrade it through the following process.

---
## Fix up Mod Project

**How to Upgrade**

1.  **Right-click on the mod project root**.
2.  From the menu, select **`Utility > Fix up Mod Project`**.
3.  The necessary assets will be automatically copied to the current mod project path, resolving any compatibility issues.
4.  Afterwards, you can **package the updated mod** for distribution.

---

**Reference Video**

You can see the actual process in the video below:

<div style="display: flex; align-items: flex-start; gap: 24px; margin-bottom: 2.5em;">
  
  <video controls muted width="720" style="border-radius: 4px;">
    <source src="../../media/mp4/Fixup.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  
</div>

---

!!! info "Summary"
    1. The `Fix up Mod Project` feature **automatically resolves compatibility issues** with existing mods.
    2. You can **upgrade safely** with just a few clicks, without any separate manual work.
    3. After the upgrade, package and distribute it as a new version.

---

## Migrate to Mod Plugin

This feature is for resolving path issues with **MPC (MaterialParameterCollection)** files, and it is also supported in Material, Material Instance, Material Function, and MPC assets.

!!! info "Summary"
    MPC is a special asset that contains values affecting the entire game environment, such as time and weather. For example, `BG_NightWindow_MaterialParameterCollection` is an MPC that controls the material properties of a window at night.
    If a material in your mod needs to use this MPC but cannot find the path, unintended errors can occur, such as a window glowing brightly even at night. In this case, you can use the `Migrate` feature to copy the necessary MPC directly into your mod to resolve the path issue.

---

**How to Resolve**

1. In the Content Browser, find the MPC asset required for your mod (e.g., `BG_NightWindow_MaterialParameterCollection`). You can usually find the necessary file in the `/Game/BG/Material/MPC` path.
2. Right-click on the asset and select **[Migrate to Mod Plugin]** from the menu.
3. When the list of assets to be migrated appears, check the contents and click the **[Save Selected]** button to complete the save.
4. In the **[Redirector Update Report]** window, click the **[Delete Unreferenced Redirectors]** button to clean up unnecessary files.
5. Check if **_Migrated** has been added to the end of the original MPC file name, then right-click and run the **Reference Viewer** (shortcut: **[Shift+Alt+R]**) to confirm that the reference to your mod is correctly linked.

---

**Reference Video**

You can see the actual process in the video below:

<div style="display: flex; align-items: flex-start; gap: 24px; margin-bottom: 2.5em;">
  
  <video controls muted width="720" style="border-radius: 4px;">
    <source src="../../media/mp4/MPC.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  
</div>