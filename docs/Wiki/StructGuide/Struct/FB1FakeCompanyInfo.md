## 🧩 Struct: FB1FakeCompanyInfo

Defines metadata for associating a character with a fictional (fake) company and related site/job IDs.

### Properties

- **FakeCompanyId** (`FName`): ID of the fake company. *(Foreign = "Company.Id")*  
- **FakeSiteId** (`FName`): ID of the fake company’s site. *(Foreign = "Site.Id")*  
- **AutoJoinFakeJobIds** (`TArray<FName>`): A list of job IDs that crowd characters can automatically join when they get a job. *(Foreign = "Job_Fake.Id")*  

## 📚 References

- [Company](../Company.md)
- [Site](../Site.md)
- [Job](../Job.md)