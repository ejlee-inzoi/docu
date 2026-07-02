# 📘 Company Data Guide

## 🧩 Struct: FB1CompanyTableRow

Defines a company in the simulation, including display settings, currency, and organizational structure.

### Properties

- **Id** (`FName`): Unique identifier for the company.  
- **DisplayName** (`FString`): Localization key for the company name. *(StringTableKey = "Id")*  
- **Desc** (`FString`): Localization key for the company description. *(StringTableKey = "Id")*  
- **SalaryCurrencyId** (`FName`): Currency used to pay salaries. *(Foreign = "Currency.Id")*  
- **RankTitleTextId** (`FString`): Label for the rank category. *(StringTableKey)*  
- **ProgressBarTitleTextId** (`FString`): Label for progress bar display. *(StringTableKey)*  
- **Organizations** (`TArray<FB1OrganizationInfo>`): List of roles and ranks in this company.  
- **bIsFakeCompany** (`bool`): Indicates if this is a placeholder/fake company (not saved).  


## 📚 References

- [FB1OrganizationInfo](./Struct/FB1OrganizationInfo.md)
- [FB1CompanyCustomMobileMessageInfo](./Struct/FB1CompanyCustomMobileMessageInfo.md)
- [FB1LeaveCompanyCustomMobileMessageInfo](./Struct/FB1LeaveCompanyCustomMobileMessageInfo.md)
- [EB1LeaveCompanyReason](./Enum/EB1LeaveCompanyReason.md)
- [FB1OrganizationRank](./Struct/FB1OrganizationRank.md)
- [EB1EmploymentForm](./Enum/EB1EmploymentForm.md)