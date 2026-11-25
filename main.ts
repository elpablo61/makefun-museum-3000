// Museum of the Year 3000 — make.fun entry.
// Writes the winning museum label (one line, at most 200 characters)
// to entry.txt in the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "Group Chat, 2019-2025. 47 members, 0 meetings. Its last message, 'happy birthday Sarah,' was sent 214 days after Sarah left.";

// The gate only accepts 1–200 characters, so fail loudly instead of
// submitting an over-long label.
if (LABEL.length > 200) {
  throw new Error(`Label is ${LABEL.length} chars, over the 200-char cap.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LABEL, "utf8");
console.log(`Wrote ${LABEL.length} chars to ${join(outDir, "entry.txt")}`);
