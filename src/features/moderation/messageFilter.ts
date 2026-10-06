import { slurs } from "./slurList";

// Extremely Rudimentary Slur Check Protection
export function containsSlur(message : string) : number | string {

    const normalizedMessage = normalizeText(message);

    for(const slur in slurs){ 
        const term = normalizeText(slur);
        const pattern = new RegExp(`(?:^|\\s)${escapeRegExp(term)}(?:$|\\s)`, "i");

        if (pattern.test(normalizedMessage)) {
            return `Message contains slur: ${slur}`;
        }
    }

    // no profanity found
    return 401;
}

function escapeRegExp(value: string): string {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeText(text: string): string {
    return text
        .normalize("NFKC")              // Normalize Unicode variants
        .toLowerCase()                  // Case-insensitive matching
        .replace(/[\u200B-\u200D\uFEFF]/g, "") // Remove zero-width characters
        .replace(/[^a-z0-9\s]/g, " ")   // Turn punctuation into spaces
        .replace(/\s+/g, " ")           // Collapse repeated whitespace
        .trim();
}