import { mkdirSync, writeFileSync } from "node:fs";

// One-sentence pitch for "The Worst App Idea Ever Pitched".
// NapAlarm: an app that sabotages the very thing it exists to protect.
const ENTRY =
  "Pitching NapAlarm, the app that wakes you up every eleven minutes during your nap to ask whether you are enjoying it, built for heavy sleepers who believe uninterrupted rest is a missed opportunity.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
