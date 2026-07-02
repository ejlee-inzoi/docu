# 📘 KarmaReportStepAlert Data Guide

## 🧩 Struct: FB1KarmaReportStepAlertTableRow

Defines thresholds and comparison rules used to trigger alerts in the karma system.

### Properties

- **Id** (`FName`): Identifier linked to the karma state type.  
- **Step** (`int32`): Numerical step or range segment for comparison.  
- **StepCompareType** (`EB1CompareType`): How the step is compared (e.g., Equal, Greater).  
- **CompareType** (`EB1CompareType`): How the rate is compared.  
- **Rate** (`float`): Percentage or value used in comparison.  
- **bNeedAlertMessage** (`bool`): If true, shows an alert when this rule is matched.  

## 📚 References

- [EB1CompareType](./Enum/EB1CompareType.md)