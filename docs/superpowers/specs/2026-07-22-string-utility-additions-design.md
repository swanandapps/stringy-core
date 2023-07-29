# String Utility Additions — Design

Date: 2026-07-22

## Goal

Contribute a curated, cross-category set of 12 new string-manipulation functions to `stringy-core`, following the library's existing conventions (plain function + one-line description comment + `Input:`/`Output:` example + grouped `export {}` at bottom of each `lib/*.js` file).

## Scope

### `lib/textAnalysisAndValidation.js`
- `isNumeric(string)` — true if the string contains only digits, with an optional single decimal point (e.g. `"123"`, `"12.5"`). Non-string input returns `false`.
- `isAlpha(string)` — true if the string contains only letters (`a-z`, `A-Z`). Non-string input returns `false`.
- `isAlphanumeric(string)` — true if the string contains only letters and digits. Non-string input returns `false`.
- All three return `false` for an empty string (nothing to validate as "all digits"/"all letters").

### `lib/textCaseManipulation.js`
- `kebabCase(string)` — `"Hello World"` → `"hello-world"`.
- `pascalCase(string)` — `"hello world"` → `"HelloWorld"`.
- `constantCase(string)` — `"hello world"` → `"HELLO_WORLD"`.
- `slugify(string)` — `"Hello, World! 123"` → `"hello-world-123"`; strips punctuation, collapses whitespace/dashes, lowercases.
- Non-string input follows the existing `invertCase` pattern: return the input unchanged.

### `lib/textTransformations.js`
- `truncateWords(string, wordCount, ending = "...")` — truncates by word count instead of character count (word-based sibling to the existing char-based `shorten`). If the string has `wordCount` words or fewer, return it unchanged (no ending appended).
- Non-string input returns `""`, matching the existing `shuffle`/`removeDuplicates` pattern.

### `lib/textMaskingAndSecurity.js`
- `escapeHTML(string)` — escapes `&`, `<`, `>`, `"`, `'` to their named HTML entities.
- `unescapeHTML(string)` — reverses exactly those 5 entities (not a full HTML entity table).

### `lib/textFormatting.js`
- `formatBytes(bytes, decimals = 2)` — binary (1024-based) byte formatting: `1536` → `"1.5 KB"`. Units: B, KB, MB, GB, TB. `0` → `"0 B"`.

### `lib/textSpecializedOperations.js`
- `similarity(a, b)` — normalized 0–1 similarity score derived from the existing `levenshteinDistance`: `1 - distance / maxLength(a, b)`. Two empty strings → `1`.

## Testing

- New `describe` block per function.
- Functions in files that already have a dedicated test file (`textTransformations.js` → `tests/textTransformation.test.js`) get their tests added there.
- Functions in files without a dedicated test file get a new `tests/<fileName>.test.js`, matching the split already established by `textTransformation.test.js` vs. the catch-all `tests/index.test.js`.
- Each function gets at least: a happy-path case, an edge case (empty string / boundary), and a non-string-input case (matching the defensive behavior already present elsewhere in the codebase).

## Out of scope

- No changes to `index.js` beyond what's already handled by existing `export *` wildcards (no index.js edits needed since new functions are added to files it already re-exports).
- No new lib category files — everything fits into the 6 existing files above.
- No README updates in this pass (can follow as a quick separate doc PR once functions are implemented and tested).
