## 🧩 Struct: FB1SocialEventRecommendSiteInfo

Defines recommended sites for a social event across a specific map.

### Properties

- **MapName** (`FName`): ID of the map where recommendations apply. *(Foreign = "Map.Id")*  
- **SiteIds** (`TArray<FName>`): List of site IDs recommended for the event. *(Foreign = "Site.Id")*  

## 📚 References

- [Site](../Site.md)
- [Map](../Map.md)