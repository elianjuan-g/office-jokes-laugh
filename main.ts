// Make the AI Judge Laugh: Office Jokes
// Writes one one-line office joke (<=199 chars) to /output/entry.txt.
// Deterministic: no network, no reads outside this repo.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "In my exit interview HR asked what would have kept me — I said 'this interview, three years ago.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
