# Scrap-Question

**Export Moodle quiz questions from the UTH course portal to TXT, Word-compatible HTML, or JSON.**

**English** | [Tiếng Việt](README.vi.md)

Scrap-Question is a Tampermonkey userscript for `courses.ut.edu.vn`. It reads the current quiz page, follows available pagination links, saves progress, and lets you download the collected content when you choose.

This guide describes [main.user.js](main.user.js), version **1.3.1**. The script's interface and exported field labels are currently in Vietnamese; this English guide translates the controls.

> Prefer the **review page** for study exports. On an active attempt, fetching another page may advance the server-side attempt position. The script cannot bypass sequential navigation, restore access to previous questions, or reveal answers the server does not provide.

## Contents

- [Features](#features)
- [Supported pages](#supported-pages)
- [Installation](#installation)
- [Usage](#usage)
- [Controls](#controls)
- [Export formats](#export-formats)
- [Answer matching](#answer-matching)
- [Saved data and updates](#saved-data-and-updates)
- [Activity logs](#activity-logs)
- [How it works](#how-it-works)
- [Troubleshooting](#troubleshooting)
- [Limitations and known issues](#limitations-and-known-issues)
- [Development](#development)
- [References](#references)

## Features

- A small launcher at the top-right; the panel stays hidden until opened.
- Full collection across available quiz pages with progress counts and a percentage.
- Pause, resume, and rescan controls.
- Persistent data, separated by attempt ID and page type.
- Manual TXT, Word-compatible `.doc`, and JSON downloads.
- Numeric sorting by the displayed question number, even when Moodle's internal slots use a different order.
- One blank line between questions, with the question number and text on the same line.
- Review-answer matching to add an unambiguous `a.`, `b.`, `c.`, or `d.` label.
- Activity logs with download and clear controls.

**Finishing a scan does not automatically download any file.**

## Supported pages

The userscript matches these URLs:

```text
https://courses.ut.edu.vn/mod/quiz/review.php*
https://courses.ut.edu.vn/mod/quiz/attempt.php*
```

| Behavior | `review.php` — review | `attempt.php` — active attempt |
| --- | --- | --- |
| Full-page collection | Yes, where access is available | Yes, where access is available |
| Warning panel and confirmation before scanning | No | Yes |
| Correct-answer line in TXT/Word | Included when available; otherwise an unavailable-answer message | Omitted |
| `correctAnswer` in JSON | Included | Omitted |
| Automatic a/b/c/d answer matching | Yes, for a unique match | No |
| Attempts per page on a loading error | Up to 3 | 1 |
| Redirect response | Stop without following it | Stop without following it |

The URL must contain an `attempt` parameter, and the page must contain question markup matching `.que .qtext`. A bare `review.php` URL, a login page, or a quiz overview does not satisfy these conditions.

This is a site-specific script, not a general exporter for every Moodle installation.

## Installation

### Requirements

- A browser supported by [Tampermonkey](https://www.tampermonkey.net/), with the extension installed.
- A signed-in UTH account that can access the quiz pages you want to export.
- Permission for Tampermonkey to run on `courses.ut.edu.vn`.

No Node.js, Python, package installation, API key, or build step is needed to use the script.

### Install through the editor

1. Open [main.user.js](main.user.js). On GitHub, use **Raw** to copy the plain source.
2. Open Tampermonkey → **Dashboard** → create a new script.
3. Replace the default template with the entire contents of `main.user.js`, including the `==UserScript==` metadata block.
4. Save with **Ctrl+S** and ensure the script is enabled.
5. Sign in to the course portal and open the quiz's review or attempt page.
6. Reload that page if it was already open.

Depending on your browser and extension configuration, opening the raw `.user.js` URL may instead display Tampermonkey's installation screen. If it only displays source, use the editor steps above.

If the extension reports that userscripts cannot run, follow the official [userscript execution permission guide](https://www.tampermonkey.net/faq.php#Q209). Also check its site-access settings.

## Usage

1. Open the quiz through the course portal while signed in.
2. Click **Xuất câu hỏi** at the top-right. Opening the panel does not start a scan.
3. Click **Quét toàn bộ**, or **Tiếp tục quét** if some questions are already saved.
4. On `attempt.php` only, read the warning and accept to proceed. Canceling sends no scan requests and leaves existing data intact.
5. Keep the tab open while the script loads the available pages.
6. Wait for **Hoàn tất**. Then click **Tải TXT**, **Tải Word (.doc)**, or **Tải JSON**.

Use one scanning tab per attempt. Multiple tabs can write to the same saved record.

Starting from the middle of a quiz still makes the script look for missing pages, including earlier ones. If the server prohibits going back, collection can stop before all questions are available. “Full scan” is not a way around that restriction.

### Pause, hide, and resume

- **Tạm dừng** stops collection and aborts the current request where possible.
- **×** hides the panel but does **not** pause collection.
- **Esc** also hides it when keyboard focus is inside the panel.
- Reopening the panel does not restart scanning.
- After a reload, open the panel and explicitly resume. Saved progress does not expire on a timer.

Aborting a request does not undo anything the server has already processed.

## Controls

| Label in the interface | English meaning | Action |
| --- | --- | --- |
| Xuất câu hỏi | Export questions | Open the panel |
| Quét toàn bộ | Scan all | Start collecting available pages |
| Tiếp tục quét | Resume scan | Continue collecting missing pages |
| Tạm dừng | Pause | Stop collection |
| ↻ Quét lại | Rescan | Replace the current saved dataset and scan again |
| Tải TXT | Download TXT | Export plain text |
| Tải Word (.doc) | Download Word | Export Word-compatible HTML |
| Tải JSON | Download JSON | Export structured question data |
| NHẬT KÝ | Activity log | Expand recent events |
| Tải nhật ký | Download log | Download a separate log file |
| Xóa nhật ký | Clear log | Clear logs without clearing questions |
| × | Hide | Close the panel without stopping the scan |

**Rescan is different from resume.** On a review page, rescan replaces the current dataset immediately. On an attempt page, it first requires the warning confirmation. It affects only the current page type and attempt ID.

## Export formats

| Format | Content and practical limits |
| --- | --- |
| TXT | UTF-8 text with a BOM, suitable for reading and copying |
| Word `.doc` | HTML with a `.doc` extension, not binary DOC or native DOCX |
| JSON | Structured metadata and questions; no BOM |

Word may ask about the file format when opening the `.doc` export. You can use **Save As → .docx** after opening it.

File names follow this pattern:

```text
UTH-<attempt>-<count>-cau.txt
UTH-<attempt>-<count>-cau.doc
UTH-<attempt>-<count>-cau.json
```

Partial exports add `-chua-du` before the extension. Their metadata states that collection is incomplete.

### Text layout

Exports include a header with the title, attempt ID, collected/expected count, completion state, and source URL. The question section uses this layout; the sample content below is illustrative:

```text
Câu hỏi 1 Example question?
a. First option
b. Second option
c. Third option
d. Fourth option
Đáp án: b. Second option

Câu hỏi 2 Next question?
a. First option
b. Second option
c. Third option
d. Fourth option
Đáp án: d. Fourth option
```

On `attempt.php`, the `Đáp án:` lines are omitted.

Formatting rules:

- Keep the question number and question text on one line.
- Keep options on separate lines and one blank line between questions.
- Remove standalone underscore/equal-sign separator lines and extra blank lines.
- Preserve underscores and equals signs inside meaningful content.
- Preserve question markers such as `::C5.002::[html]` if present in the source.
- Omit personal-response fields, selected-choice markers, and result labels such as `Kết quả: Đúng/Sai`.
- Include specific/general feedback when present.
- Save images as text markers and URLs, not embedded image files.

Exporting uses all saved questions for the current page type and attempt. Formatting changes apply when exporting old data too.

### JSON structure

Top-level fields are `title`, `attempt`, `complete`, `expected`, and `questions`.

Question entries contain `id`, `slot`, `number`, `question`, `options`, `feedback`, `generalFeedback`, `images`, and `source`. Review exports also include `correctAnswer`; attempt exports omit that field. Exported option entries contain their `text`.

Activity logs are downloaded separately, not bundled into the question JSON.

## Answer matching

On review pages, the script first reads `.rightanswer` and removes the English prefix `The correct answer is:` or its plural form.

It then compares the answer text with the a/b/c/d option text:

1. Normalize Unicode to NFC and collapse whitespace.
2. Preserve wording, accents, case, and punctuation.
3. Add a letter only when exactly one option matches.
4. Keep the original answer if no option matches or several choices have identical text.
5. Do not add the letter again when the answer already matches a labeled option.

This is exact normalized comparison, not fuzzy matching or AI inference.

When `.rightanswer` is absent, the script can report options explicitly marked correct by the page, with a note that the list may be incomplete. If neither source is available, review exports say `Trang không hiển thị đáp án đúng.` The script does not treat the user's selected option as proof of correctness.

## Saved data and updates

The script uses Tampermonkey's `GM_getValue` and `GM_setValue` storage:

| Page type | Storage key |
| --- | --- |
| Review | `uth-quiz-export-v1:<attempt>` |
| Attempt | `uth-quiz-probe-v1:<attempt>` |

The historical `probe` name is retained for compatibility; it does not indicate a limited-scan mode.

Stored data includes collected questions, visited/discovered pages, expected question IDs, completion state, and logs. There is no automatic expiration implemented by the script.

- Updating the same installed userscript keeps its stored data.
- Closing/reloading the page does not intentionally clear that data.
- **Quét lại** replaces the current record, including its logs.
- **Xóa nhật ký** clears only logs and is disabled during a scan.
- Deleting the script's storage or losing extension/browser-profile data can remove the saved copy.
- Downloaded files are separate and are not deleted by a rescan.

To update, replace the source of the existing Tampermonkey script with the new `main.user.js`, save, and reload the quiz page. Use **Quét lại** if you need fresh server content rather than a new export of the saved snapshot.

## Activity logs

Version 1.3.1 records scan status, pages read, newly added question counts, retries, pauses, completion, and errors.

- Stores up to **250** entries per saved record.
- Displays the latest **100** entries in the panel.
- Downloads retained entries as `UTH-<attempt>-nhat-ky.txt`.
- The log export includes the current page URL.

See the known log-download issue below before using this button for diagnostics.

## How it works

1. Read the question markup already present in the current document.
2. Discover pagination links from Moodle's question navigation and previous/next links.
3. Fetch unvisited pages sequentially using the current login session.
4. Parse each HTML response with `DOMParser`.
5. Merge questions by internal slot to avoid duplicates and save progress.
6. Sort by displayed question number when exporting.

The default pause between pages is **700 ms** and each fetch has a **30-second timeout**. On review pages, ordinary load errors can be retried twice; on attempt pages there is no automatic retry. Redirect responses stop the scan on either page type.

Fetches use `credentials: 'same-origin'` and `redirect: 'manual'`. The script does not extract credentials, submit quiz forms, or upload question data to an external service. Requests are still real authenticated requests: a GET on an attempt page may change server-side navigation state.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| No launcher appears | Enable the script and extension; check site access and userscript execution permission; open an authenticated quiz page containing an `attempt` parameter and question content; reload |
| A warning appears | Expected on `attempt.php`; review pages do not display the warning dialog or warning panel |
| Scan stops after a redirect | Check login and access rules; the script intentionally does not follow redirects |
| Some questions are missing | Check navigation permissions and whether earlier pages are locked; export the partial result if useful |
| No correct answers in an attempt export | Expected: answer fields are omitted on `attempt.php` |
| Review says the answer is unavailable | The returned page did not expose the answer through the supported selectors |
| An answer has no a/b/c/d label | The normalized text did not match exactly one labeled option |
| Scan completed but nothing downloaded | Expected: click a format button yourself |
| Word reports a format mismatch | The file is HTML with a `.doc` extension; open it and save as `.docx` if needed |
| Changed formatting but old question content | Export again for formatting changes; rescan for changes to server content |
| Log download causes a console error | See the version 1.3.1 issue below |

## Limitations and known issues

- Designed around this portal's Moodle markup, particularly multiple-choice questions. Complex question types, mathematical rendering, media, and custom plugins may not export completely.
- It cannot recover hidden answers, bypass access rules, or guarantee full collection on sequential quizzes.
- Changing only `@match` is not sufficient to guarantee compatibility with another site.
- The interface and generated labels remain Vietnamese.
- Browser background throttling or network conditions may slow scans.

**Known issue in the inspected version 1.3.1:** `downloadLog()` contains a logging statement referencing `format` and `questions`, which are not defined in that function. This statement runs after requesting the log download and can raise a `ReferenceError`, preventing the following success-log message. It does not establish whether the browser saved the file. This documentation update does not change the userscript.

## Development

Runtime source: [main.user.js](main.user.js). Documentation: [README.md](README.md) and [README.vi.md](README.vi.md).

No build process is required. With Node.js installed, you can check JavaScript syntax from this folder:

```sh
node --check main.user.js
```

A syntax check does not validate live Moodle behavior or catch every runtime error. This folder currently has no automated test runner bundled with it.

For manual verification, use a review page first: verify opening/hiding the panel, scanning, pause/resume, saved-data reuse, manual downloads, question order, answer labels, and logs. Only evaluate attempt-page behavior on a permitted test attempt where navigation changes are acceptable.

Only the userscript is needed at runtime. Local HTML captures and course documents are not installation dependencies.

## References

- [Userscript source](main.user.js)
- [Vietnamese guide](README.vi.md)
- [Tampermonkey documentation](https://www.tampermonkey.net/documentation.php)
- [Tampermonkey FAQ](https://www.tampermonkey.net/faq.php)
- [Permission to execute userscripts](https://www.tampermonkey.net/faq.php#Q209)
