// Local check: /output/entry.txt must be UTF-8 text, 1-199 chars, not only whitespace.
import { readFileSync } from "node:fs";

const text = readFileSync("/output/entry.txt", "utf8");
const len = [...text].length;
let ok = true;

if (len < 1 || len > 199) { console.error(`FAIL: length ${len} not in 1-199`); ok = false; }
if (!text.trim()) { console.error("FAIL: entry is only whitespace"); ok = false; }
if (text.includes("\n")) { console.error("FAIL: entry is not a single line"); ok = false; }

if (ok) console.log(`PASS: entry.txt is ${len} chars, single line, valid UTF-8`);
process.exit(ok ? 0 : 1);
