# Changelog

Newest first. Record site changes here. The site does not render this file.

## 2026-11-19 — Skeleton

- First teaching shell for randomized antiplatelet trials: topic lanes from 1999, search, topic filters, an abbreviation key, a trial snapshot, more details, a learn path, and practice questions in study mode and a timed exam.
- Dialogs include a full-screen control.
- The footer carries one educational-resource notice and the last literature sweep date. This file is not shown on the page.
- `reviewedBy` is present and empty.
- `js/data/trials.js` and `js/data/questions.js` contain two placeholder entries each, labeled EXAMPLE, not a real trial. No study results are entered.
- Trial cards include an optional `crossSite` link field for a trial that is also covered on the anticoagulation timeline. The sample card uses that field only to show the link shape.
- `scripts/verify-integrity.js` checks the schema, unique ids, source fields, an empty `reviewedBy`, and banned reader-visible labels. Placeholder entries are info.
- A GitHub Actions workflow runs that check on pull requests.
- Visual theme is platelet purple on warm lilac paper, with Fraunces and Atkinson Hyperlegible.
