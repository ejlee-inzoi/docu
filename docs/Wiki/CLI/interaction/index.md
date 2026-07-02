# interaction

Overview
==

- 7 commands in this category.

Commands
==

| Command | Name | Description |
|---|---|---|
| [`interaction.cancel`](interaction.cancel.md) | Cancel Current Interaction | Cancels the currently playing interaction. Does NOT disable autonomy (unlike zoi.freeze). The chara… |
| [`interaction.clear_queue`](interaction.clear_queue.md) | Clear Interaction Queue | Clears all queued interactions. By default keeps the currently playing interaction; set cancel_curr… |
| [`interaction.execute`](interaction.execute.md) | Execute Interaction | Queues a specific interaction on a character by InteractionBagId. The character will walk to the ta… |
| [`interaction.get_current`](interaction.get_current.md) | Get Current Interaction | Returns information about the character's currently playing interaction: interaction_bag_id, state … |
| [`interaction.get_queue`](interaction.get_queue.md) | Get Interaction Queue | Returns the interaction queue status: queue count, whether it's empty, and the currently playing in… |
| [`interaction.list_available`](interaction.list_available.md) | List Available Interactions | Lists all available interactions for a target entity. Returns interaction_bag_id values that can be… |
| [`interaction.search`](interaction.search.md) | Search Interactions | Searches InteractionBag data table by keyword. Matches against row ID, category, and tags. Returns … |

