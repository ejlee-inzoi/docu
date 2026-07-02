## 🧩 Struct: FB1OrganizationInfo

Defines data for a job or role within a company, including display, retirement logic, and messaging.

### Properties

- **ListKey** (`FString`): Internal identifier for the organization entry.  
- **JobId** (`FName`): ID of the job this organization role is tied to. *(Foreign = "Job.Id")*  
- **DisplayName** (`FString`): Localized name for the job. *(StringTableKey)*  
- **IsFixedDesk** (`bool`): If true, the job requires a fixed desk.  
- **RetireAgeStep** (`EB1GrowthStep`): Growth stage when characters in this job retire.  
- **RandomRetireProbability** (`float`): Chance for early retirement.  
- **CompanyProfile** (`TSoftObjectPtr<UTexture2D>`): Image shown as the company profile.  
- **IntroductionImage** (`TSoftObjectPtr<UTexture2D>`): Intro image shown for the job.  
- **Icon** (`TSoftObjectPtr<UTexture2D>`): Icon representing this job or organization.  
- **CustomMobileMessages** (`FB1CompanyCustomMobileMessageInfo`): Mobile message configuration for this role.  
- **bRabbitHoleWork** (`bool`): If true, this is a rabbit hole (off-screen) job.  
- **RankList** (`TArray<FB1OrganizationRank>`): List of ranks associated with this job.  

## 📚 References

- [EB1GrowthStep](../Enum/EB1GrowthStep.md)
- [FB1CompanyCustomMobileMessageInfo](./FB1CompanyCustomMobileMessageInfo.md)
- [FB1OrganizationRank](./FB1OrganizationRank.md)