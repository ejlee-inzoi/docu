# motion

Overview
==

- 6 commands in this category.

Commands
==

| Command | Name | Description |
|---|---|---|
| [`motion.get_current`](motion.get_current.md) | Get Current Motion | Get the motion(s) currently playing on the target Zoi. Returns playing=false if idle, otherwise an … |
| [`motion.get_info`](motion.get_info.md) | Get Motion Info | Get metadata for a motion: total_length, loop_length, rate_scale, blend_out_time, sections (with na… |
| [`motion.list`](motion.list.md) | List Available Motions | List CharacterAnim DataTable row IDs that can be played on a Zoi.  IMPORTANT -- filter is effective… |
| [`motion.play`](motion.play.md) | Play Motion | Play a character animation on the target Zoi. anim_id: CharacterAnim row name (use motion.list to f… |
| [`motion.play_random`](motion.play_random.md) | Play Random Motion | Pick a random motion matching the filter and play it on the target Zoi. Only motions playable by th… |
| [`motion.stop`](motion.stop.md) | Stop Motion | Stop a playing animation on the target Zoi. Omit anim_id to stop all currently playing motions. |

