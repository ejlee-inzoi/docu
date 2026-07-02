---
slug: "/Wiki/script-condition/Cond_HasObjectInCraftingSlot"
---

# [Cond]_HasObjectInCraftingSlot

Overview
==

* Checks whether there is a craftable object placed in a specific slot of the target object.

Parameter
=========

| Parameter   | Description                                                                 |
|-------------|-----------------------------------------------------------------------------|
| BaseObject  | The object to check the condition for                                       |
| Command     | HasObjectInCraftingSlot                                                     |
| CompareType | Equal / NotEqual                                                            |
| S1          | Name of the slot                                                            |

- If the target object's Blueprint class has a `B1SlotComponent` named `S1`, the slot can be identified by that name.
- How to locate the target object's Blueprint class:
  1. Use the ObjectId from `Object.json` to find the `ObjectTemplateId`
  2. Use the `ObjectTemplateId` in `ObjectTemplate.json` to find the corresponding Blueprint `Asset`

Examples
========

| Example Description                                              | BaseObject | Command                | CompareType | S1          | S2 |
|------------------------------------------------------------------|------------|------------------------|-------------|-------------|----|
| Check if the target's CookingSlot contains a CraftingObject      | Target     | HasObjectInCraftingSlot| Equal       | CookingSlot |    |
| Check if the target's BunsaiSlot does NOT contain a CraftingObject | Target   | HasObjectInCraftingSlot| NotEqual    | BunsaiSlot  |    |
| Check if the target's BunsaiSlot contains a CraftingObject       | Target     | HasObjectInCraftingSlot| Equal       | BunsaiSlot  |    |
