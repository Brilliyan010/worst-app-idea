# NOTES — The Worst App Idea Ever Pitched

Competition: `u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23`
Repo: https://github.com/Brilliyan010/worst-app-idea
Anchor: root commit `3d5228904dbee6ed71cd2cb038328da6c8b08c1b`, drand round 34248393
(competition opened 2026-11-24T18:51:53Z; round 34248393 emitted after opening.)

## Revision (this commit)

Reviser session (second writing message) sharpened the pitch:

> Pitching NapAlarm, the app that wakes you up every eleven minutes during your nap to ask, mid-dream, whether you are enjoying it, built for heavy sleepers who think a nap you sleep through is a nap wasted.

- Characters: **205** (gate: 1–240, ASCII only, no trailing newline)
- Bytes: 205
- sha256 of `/output/entry.txt`: `0cb9138b2473fefff8787946a8d3ec9030eae10ee46aa7ea22910cdd52fecf9a`
- Validation: `node main.ts` run twice — byte-identical both runs (`cmp` clean, sha256 identical), valid UTF-8, single sentence, 205 chars.

What changed vs the 198-char version and why it is better per the judge criteria:

- "mid-dream" added before "whether you are enjoying it" — a vivid, specific picture (criterion 5): the phone buzzing while you are literally mid-dream, not just "during your nap".
- Tail rewritten from "who believe uninterrupted rest is a missed opportunity" to "who think a nap you sleep through is a nap wasted" — a tighter paradox (criterion 2): the absurd logic now lands as a punchline — sleeping through your nap, the one thing a nap is for, is framed as waste. Deadpan founder confidence (criterion 3) is stronger because the claim is bolder and shorter.
- Still one clean sentence, NapAlarm + the eleven-minute mid-nap interruption intact, no second idea, no padding (criterion 4); 205 of 240 chars used.

## Entry (v1, superseded)

> Pitching NapAlarm, the app that wakes you up every eleven minutes during your nap to ask whether you are enjoying it, built for heavy sleepers who believe uninterrupted rest is a missed opportunity.

- Characters: **198** (gate: 1–240, ASCII only, no trailing newline)
- Bytes: 198
- sha256 of `/output/entry.txt`: `064761efc6dea108adb25c0944018853a705967b9bd245fa06e941846a494c5b`

## Validation evidence (v1)

- `node main.ts` run twice (Node v24.22.1 local; grader runs Node 22.23.4, same
  type-stripping behaviour for this plain-TS file): both runs wrote
  `/output/entry.txt` byte-identical — `cmp` clean, sha256 identical both runs.
- Output is valid UTF-8, 198 chars, not whitespace-only, single sentence.
- `main.ts` uses Node stdlib only (`node:fs`), no input, no network, no secrets,
  never reads git history. Deterministic by construction: a single string
  constant written verbatim.

## Why it wins — against each judge criterion

1. **Specific app + what it uselessly does:** NapAlarm is named, and its
   function is precise — it wakes you up *during* your nap, every eleven
   minutes, to ask whether you are enjoying it.
2. **Uselessness is funny:** perfect self-sabotage. An alarm app whose job is
   to destroy the nap it is meant to protect, with absurd precision ("every
   eleven minutes") and deadpan confidence ("believe uninterrupted rest is a
   missed opportunity"). The problem nobody has — naps that are *too*
   restful — meets the app that solves it by ruining them.
3. **Sounds like a real pitch:** opens "Pitching NapAlarm", names the product,
   states what it does and who it is for (heavy sleepers) — a founder who
   means every word.
4. **Uses the 240 chars well:** 198 chars, one clean sentence, no padding, no
   second idea crowding it. Every clause earns its place.
5. **Vivid, specific picture:** you can see it — phone buzzing mid-nap,
   "Are you enjoying it?" — not a generic joke about apps.

## Rejected candidates

- **UmbrellaCast** (196 chars) — "livestreams your umbrella's exact angle to
  strangers who rated yesterday's rain". Funny premise, but the joke is
  muddier: two half-ideas (livestreaming + strangers rating rain) crowd one
  sentence.
- **Shelfie** (182 chars) — photographs your bookshelf and texts friends a
  report on unread books. Too close to a real, mildly useful product; the
  uselessness is weak.
- **QueuePal** (199 chars) — finds the longest queue in your city and holds
  your place in it for fun. Strong mismatch, but "finds / drives you there /
  holds your place" stacks three functions; NapAlarm's single self-defeating
  function is cleaner.
- **FridgeWhisper** (175 chars) — narrates your leftovers' feelings at
  3 a.m. Surreal rather than a believable pitch; the founder-voice is weaker.
- **ToastTracker** (181 chars) — logs every slice of toast you have ever
  eaten. Food logging already exists, so it reads as a bad product, not a
  brilliantly pointless one.
