## 🧩 Struct: FB1CompanyCustomMobileMessageInfo

Defines a set of custom mobile messages used for company-related events such as promotion, joining, or leaving a job.

### Properties

- **JobPromotionId** (`FName`): Message ID to send when the character is promoted. *(Foreign = "CustomMobileMessageTable.Id")*  
- **JobRankUpId** (`FName`): Message ID to send when the job rank increases. *(Foreign = "CustomMobileMessageTable.Id")*  
- **JobRankDownId** (`FName`): Message ID to send when the job rank decreases. *(Foreign = "CustomMobileMessageTable.Id")*  
- **JoinCompanyId** (`FName`): Message ID to send when joining a company. *(Foreign = "CustomMobileMessageTable.Id")*  
- **LeaveCompanyIds** (`TArray<FB1LeaveCompanyCustomMobileMessageInfo>`): List of message configurations used when the character leaves a company.  

## 📚 References

- [FB1LeaveCompanyCustomMobileMessageInfo](./FB1LeaveCompanyCustomMobileMessageInfo.md)