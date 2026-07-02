## 🧩 Struct: FB1ServiceRoleInfo

Defines a service role for scripted events, including associated company, job, and timeline.

### Properties

- **ServiceRoleId** (`FName`): Unique identifier for the service role.  
- **TimelineId** (`FName`): Timeline event triggered by this role. *(Foreign = "Timeline_Event.Id", Editable)*  
- **CompanyId** (`FB1TableRowName`): Fake company this service is tied to. *(Foreign = "Company_Fake.Id", UseNone, Editable)*  
- **JobId** (`FB1TableRowName`): Fake job this role represents. *(Foreign = "Job_Fake.Id", UseNone, Editable)*  

## 📚 References

- [FB1TableRowName](./FB1RandomAnimationInfo.md)
- [Timeline](../Timeline.md)
- [Company](../Company.md)
- [Job](../Job.md)