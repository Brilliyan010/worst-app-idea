import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for "The Worst App Idea Ever Pitched".
// NapAlarm: an app that sabotages the very thing it exists to protect.
const ENTRY =
  "Pitching NapAlarm, the app that wakes you up every eleven minutes during your nap to ask, mid-dream, whether you are enjoying it, built for heavy sleepers who think a nap you sleep through is a nap wasted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
