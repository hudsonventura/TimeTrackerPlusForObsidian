# Time Tracker Plus for Obsidian

A clean, minimalist time tracking plugin for Obsidian that helps you track time spent on tasks with a simple, table-based interface.  

It was inspired on https://github.com/Ellpeck/ObsidianSimpleTimeTracker  


## Features

- ⏱️ **Simple time tracking** - Start and stop timers with one click
- 🎯 **Target time goals** - Set time goals and track progress with a visual progress bar
- 📊 **Real-time updates** - See durations update live as timers run
- 🔴 **Visual indicators** - Clear red indicators show when timers are active
- 🗂️ **Multiple segments** - Track multiple tasks in one tracker
- ✏️ **Editable entries** - Edit segment names and timestamps




## Quick Start

### Creating a Time Tracker

1. Open the command palette (`Ctrl/Cmd + P`)
2. Search for **"Insert Time Tracker"**
3. Enter a target time (optional) - e.g., `2h`, `30m`, `1h30m`
4. Press Enter

![Insert Time Tracker]()
*GIF placeholder: Showing the Insert Time Tracker command and modal*

An empty tracker will be inserted in your note:

```markdown
```simple-time-tracker
{"entries":[],"targetTime":"2h"}
```
```

### Starting Your First Timer

When you have an empty tracker, click the **Play button** (▶️) to start your first segment.

![Starting a timer]()
*GIF placeholder: Clicking the play button to start the first segment*

### Tracking Time

Once a timer is running, you'll see:
- 🔴 **Red background** on the active row
- 🔴 **Bold red duration** counting up in real-time
- 🔴 **"● RUNNING" indicator** next to the segment name
- 🔴 **Animated progress bar** (if target time is set)

![Running timer indicators]()
*GIF placeholder: Showing all the red visual indicators on a running timer*

## Usage Guide

### Segment Controls

Each segment has control buttons on the right:

| Button | Action | Description |
|--------|--------|-------------|
| ▶️ **Play** | Continue | Creates a new sub-entry to continue tracking this segment |
| ⏹️ **Stop** | Stop | Stops the currently running timer in this segment |
| ✏️ **Edit** | Edit | Edit segment name, start time, and end time |
| 🗑️ **Delete** | Remove | Delete this segment (with confirmation) |

![Segment controls]()
*GIF placeholder: Demonstrating each button action*

### Editing Segments

1. Click the **Edit button** (✏️) or **double-click** the segment name
2. Modify the segment name, start time, or end time
3. Click the **checkmark** or press **Enter** to save
4. Press **Escape** to cancel

![Editing a segment]()
*GIF placeholder: Editing a segment name and timestamps*

### Target Time & Progress Bar

When you set a `targetTime`, a progress bar appears inside the table showing:
- Current time vs. target time
- Progress percentage
- Visual progress bar that fills as you work
- Red animated bar when timer is running

**Target time format:**
- `30s` - 30 seconds
- `5m` - 5 minutes
- `2h` - 2 hours
- `1h30m` - 1 hour 30 minutes
- `2d5h` - 2 days 5 hours
- `1y2M3d4h5m6s` - Combinations of years, months, days, hours, minutes, seconds

![Progress bar in action]()
*GIF placeholder: Progress bar filling up with animated red gradient*

### Sub-Entries (Continue Feature)

The **Play button** (▶️) creates sub-entries, allowing you to:
- Pause and resume work on the same segment
- Track multiple work sessions
- See total time across all sub-entries

**Example:**
```
Segment 1 (6s total)
  ├─ Part 1: 2s
  └─ Part 2: 4s
```

Sub-entries don't have control buttons - all controls are on the main segment.

![Sub-entries example]()
*GIF placeholder: Creating and managing sub-entries*

### Stop All Timers Command

To stop all active timers in the current document:

1. Open command palette (`Ctrl/Cmd + P`)
2. Search for **"Stop All Timers"**
3. Press Enter

You'll see a notification showing how many timers were stopped.

![Stop all timers]()
*GIF placeholder: Using the Stop All Timers command*

## Settings

Access plugin settings via: **Settings → Simple Time Tracker**

### Available Settings

- **Timestamp Display Format** - How timestamps are shown in the table
- **CSV Delimiter** - Character used when copying as CSV
- **Fine-Grained Durations** - Include days, months, and years in durations
- **Timestamp Durations** - Show durations as timestamps (12:15:01) vs duration format (12h 15m 1s)
- **Display Segments in Reverse Order** - Show newest segments at the bottom
- **Show Total Today** - Display total time spent today

## Tips & Tricks

### 1. Multiple Trackers
You can have multiple time trackers in the same note to track different tasks:

```markdown
## Project A
```simple-time-tracker
{"entries":[],"targetTime":"4h"}
```

## Project B
```simple-time-tracker
{"entries":[],"targetTime":"2h"}
```
```

### 2. Daily Time Tracking
Create a daily note template with a time tracker:

```markdown
# {{date}}

## Time Tracking
```simple-time-tracker
{"entries":[],"targetTime":"8h"}
```
```

### 3. Quick Time Entry
- **Double-click** any segment name to quickly edit it
- **Press Enter** while editing to save immediately
- **Press Escape** to cancel editing without changes

### 4. Visual Scanning
When timers are running:
- Look for **red borders** on the left of table rows
- Watch for **pulsing "● RUNNING"** text
- Check the **animated red progress bar**

## Data Format

Time trackers are stored as JSON inside code blocks:

```json
{
  "entries": [
    {
      "name": "Segment 1",
      "startTime": "2025-11-01T20:28:35.470Z",
      "endTime": "2025-11-01T20:28:42.645Z",
      "subEntries": undefined
    }
  ],
  "targetTime": "2h"
}
```

### Properties

- `entries` - Array of time segments
- `targetTime` - (Optional) Target time goal
- `name` - Segment name
- `startTime` - ISO 8601 timestamp
- `endTime` - ISO 8601 timestamp (null if running)
- `subEntries` - Array of sub-entries (for continued sessions)

## Keyboard Shortcuts

While editing:
- `Enter` - Save changes
- `Escape` - Cancel editing

## Troubleshooting

### Timer not updating
- Ensure you're in **Reading View** or **Live Preview** mode
- Try reloading the note

### Progress bar not showing
- Verify your tracker has a `targetTime` property
- Check the format is correct (e.g., `"2h"`, `"30m"`)

### Can't edit timestamp
- Only non-running entries can have their end time edited
- Running entries only allow name and start time editing

### Trackers not working in tables
- Code blocks cannot be embedded in Markdown tables
- Use headings to organize multiple trackers instead

## Support

For issues, feature requests, or questions:
- Check the plugin settings for customization options
- Reload Obsidian if the plugin isn't responding
- Disable and re-enable the plugin to reset

## Credits

Original plugin concept and base code from the Simple Time Tracker plugin.
Enhanced with progress tracking, visual indicators, and improved UX.

## License

MIT License - See LICENSE file for details

---

**Version:** 1.0.0  
**Author:** Simple Time Tracker Contributors  
**Last Updated:** November 2025

