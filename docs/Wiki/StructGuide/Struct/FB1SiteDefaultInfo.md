## 🧩 Struct: FB1SiteDefaultInfo

Defines general settings for a site, including metadata, visuals, pricing, and LOD/streaming behavior.

### Properties

- **NameTextId** (`FString`): Localization key for the site's name. *(StringTableKey)*  
- **SiteType** (`EB1SiteType`): Primary type of the site (e.g., Residence, Public).  
- **SiteSubType** (`EB1SiteSubType`): Subtype for more granular classification.  
- **Tags** (`TArray<FName>`): Tags used to describe the site’s features.  
- **OverrideIconId** (`FName`): Icon ID used to override the default UI icon. *(Foreign = "SiteTypeUIInfo.Id")*  
- **DisplayType_TextId** (`FString`): Localized label for the site type. *(StringTableKey)*  
- **DescriptionTextId** (`FString`): Localized description of the site. *(StringTableKey)*  
- **OperatingHoursTextId** (`FString`): Localized display of operating hours. *(StringTableKey)*  
- **SiteImage** (`TSoftObjectPtr<UObject>`): Image displayed in UI. *(AllowedClasses = Texture2D, SlateTextureAtlasInterface)*  
- **Price** (`int64`): Base price for purchasing or renting the site. *(ClampMin = 0)*  
- **Size** (`FVector2D`): 2D dimensions of the site.  
- **StandardizedSize** (`FString`): Standardized size text for UI labeling.  
- **StreamingDistance** (`float`): Distance at which the site is streamed in. *(ClampMin = 0.0)*  
- **StreamingDistanceMargin** (`float`): Margin added to the streaming distance. *(ClampMin = 0.0)*  
- **Lod0Distance–Lod2Distance** (`float`): LOD levels’ base distances. *(ClampMin = 0.0)*  
- **Lod0DistanceMargin–Lod3DistanceMargin** (`float`): LOD levels’ distance margins. *(ClampMin = 0.0)*  
- **bTakeOffShoes** (`bool`): Whether characters remove shoes when entering.  
- **bIsEnableWeathering** (`bool`): Whether weathering effects apply to this site.  
- **SiteDetailInfoId** (`FName`): ID of detailed site info. *(Foreign = "SiteDetailInfo.Id")*  
- **bDisabled** (`bool`): Whether this site is currently disabled from use.  
- **bDevOnly** (`bool`): Whether this site is for development/debug only.  

## 📚 References

- [EB1SiteType](../Enum/EB1SiteType.md)
- [EB1SiteSubType](../Enum/EB1SiteSubType.md)
- [SiteTypeUIInfo](../SiteTypeUIInfo.md)
- [SiteDetailInfo](../SiteDetailInfo.md)