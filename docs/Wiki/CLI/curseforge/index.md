# curseforge

Overview
==

- 5 commands in this category.

Commands
==

| Command | Name | Description |
|---|---|---|
| [`curseforge.auth_status`](curseforge.auth_status.md) | CurseForge Auth Status | Return whether the current cfcore session holds a valid CurseForge auth token. Synchronous; no toas… |
| [`curseforge.logout`](curseforge.logout.md) | CurseForge Logout | Log out from CurseForge by invalidating the current cfcore auth token. Mainly used to reset state b… |
| [`curseforge.send_code`](curseforge.send_code.md) | CurseForge Send Code | Send a 6-digit passwordless login code to the given email. Async; the result (success or error desc… |
| [`curseforge.upload_mod_file`](curseforge.upload_mod_file.md) | CurseForge Upload Mod File | Upload a mod folder to CurseForge. Reads the .uplugin to find CfUgcId; if absent, this command firs… |
| [`curseforge.verify_code`](curseforge.verify_code.md) | CurseForge Verify Code | Verify the 6-digit security code received by email and obtain an auth token. Async; the result is r… |

