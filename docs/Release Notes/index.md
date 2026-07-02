# Release Notes
View the latest release notes to see what’s new.

<!-- ??? success "Version: 20250820.6420.W.MODKIT.EGS"

    - **Updated**: DLC 필터 추가
 -->
??? success "Version: 202604"

    **Changes**

    - **Changed**: MetaHuman Editor updated from UE 5.4 to UE 5.6.
        - Face modding workflow now uses MetaHuman Editor based on UE 5.6
        - Previous UE 5.4 workflow has been moved to [Legacy]

    !!! warning
        Faces created with the previous UE 5.4 MetaHuman Editor may need to be re-exported using the updated workflow.

??? success "Version: 202603"

    **New Features**

    - **Added**: CAZ modding expansion.
        - Motion modding support added
        - Accessory modding support added
        - Face modding support added

    - **Added**: Improvements to Mod Project management.
        - Search functionality added
        - Filter functionality added
        - Merge functionality added for combining multiple mod projects


??? success "Version: 202602"

    **New Features**

    - **Added**: DA module has been converted to a JSON-based format, with a migration feature provided for existing data.
    - **Added**: Object Sound Mod Wizard for configuring object-based interaction sounds.
    - **Added**: A Discord connection button for Curse Forge has been added to the Modkit.

    **Issue Fixes**
    
    - **Fixed**: An issue where Rabbit Hole job data could not be edited or was not properly applied in-game.



??? success "Version: 202512"

    **CAZ**

    - **Added**: Clothing Wizard(supporting Socks, Stockings, Underwear, Shoes, Jackets, Tops, and Bottoms)

    **Build**

    - **Added**: Stair Wizard for architectural construction.



??? success "Version: 202510"

    - **Added**: Skin system.  
    - **Added**: RawResources (Hair,Skins) 
    - **Added**: Hair customization options.  
    - **Added**: Masking Editing feature.  
    - **Added**: Door objects.  
    - **Added**: Fence items.  
    - **Added**: Pillar objects.  
    - **Added**: Window objects.  
    - **Added**: Localization Modding support.
    - **Added**: Open Mod Tutorials Widget.
    - **Added**: 12 Data Assets.
    ??? info "Data Asset List"
          * `DA_CityMove`
          * `DA_Collection`
          * `DA_Farming`
          * `DA_FleaMarket`
          * `DA_FocusableLayer`
          * `DA_Insurance`
          * `DA_RewardObject`
          * `DA_SiteScheduleCustomize`
          * `DA_SmartPhone`
          * `DA_TalkTargetSelection`
          * `DA_TinyShop`
          * `DA_ZoiGroup`

  
??? success "Version: 202509"

    **Usability Improvements**

    - When uploading mods that use in-game assets, a crash warning popup will now appear.
    - A new feature has been added to the Build item list, allowing users to filter and view only specific DLC items.
    - The kit now uploads the source file instead of a pre-cooked file. Authors will need to wait for the cooking process to finish before reviewing their content in-game.

    **Bug Fixes**

    - Fixed an issue where it was not possible to edit Blueprints in older furniture mod projects.
    - Fixed an issue where buttons were not visible on the Asset Copy popup when entering the Mod Wizard.


??? success "Version: 202508"

    - **Added**: DLC (Chahaya) json data.
    - **Added**: New character json data.
    - **Added**: New build json data.
    - **Added**: Resource migration feature.
    - **Added**: 2 new Data Asset files (DA_Disaster, DA_OutfitRigidBody).
    - **Updated**: Data update for DLC content.
    - **Updated**: Resource assets.
    - **Fixed**: Modified the output path for local mods.
        * *Before* -> `This PC > Documents > inZOI > Mods`
        * *After* -> `This PC > Documents > inZOI > Mods > 88849`
    - **Fixed**: Improved the deletion process for mod plugin projects.


??? success "Version: 202506"

    - **Initial Release**