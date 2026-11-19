# Antiplatelet trials

A static teaching timeline of randomized antiplatelet trials for pharmacy residents, pharmacy students, and clinicians.

The page is plain HTML, CSS, and JavaScript. There is no build step. It is meant to be published with GitHub Pages from the `main` branch, root folder.

The scope is randomized trials of antiplatelet drugs (aspirin, P2Y12 inhibitors, cangrelor, glycoprotein IIb/IIIa inhibitors, vorapaxar, cilostazol, and similar agents) in acute coronary syndromes, percutaneous coronary intervention and dual antiplatelet therapy duration, de-escalation and P2Y12 monotherapy, genotype-guided therapy, stroke and transient ischemic attack, peripheral artery disease, aspirin prevention, cardiac surgery, and transcatheter aortic valve implantation.

This repository currently holds the skeleton only. `js/data/trials.js` and `js/data/questions.js` each contain two placeholder entries labeled `EXAMPLE, not a real trial`. They are not studies, and they do not report results.

This site is a sister teaching timeline to [anticoag-timeline](https://github.com/rockyman10/anticoag-timeline) and [critcare-timeline](https://github.com/rockyman10/critcare-timeline). The page shell follows those sites. Trial text is written here from primary sources. Do not paste clinical prose from the other repositories.

## Open locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080/`. `index.html` also opens directly in a browser.

## Layout

| Path | Role |
| --- | --- |
| `index.html` | Page shell: timeline, Teach menu, dialogs, footer |
| `css/site.css` | Platelet-purple theme, timeline, dialogs, phone layout |
| `js/app.js` | Timeline, trial snapshot, learn path, practice engine |
| `js/site-meta.js` | Educational notice, empty `reviewedBy`, last literature sweep, abbreviation key |
| `js/data/topics.js` | Lane names |
| `js/data/trials.js` | Trial cards |
| `js/data/questions.js` | Board-style practice items |
| `js/learn-path.js` | Short orientation path |
| `scripts/verify-integrity.js` | Schema and wording check |
| `.github/workflows/verify-integrity.yml` | Runs the check on pull requests |
| `CHANGELOG.md` | Editor log. The site does not render it |

Home page: lanes are topics, years run on the x-axis from 1999, search and topic filters sit above the timeline, and the abbreviation key is rendered from `js/site-meta.js`. The footer has one educational-resource notice and the last literature sweep date. There is no reader-visible changelog.

A marker opens a **Trial snapshot**. **More details** uses the same fields and adds limitations, guidelines (with a locus), sources, and where any numbers were read. An optional cross-site link is shown on both views when the card has one. Teach → **Learn path** walks the shell. Teach → **Practice questions** runs study mode or a timed exam. Dialogs have a full-screen control. Esc leaves full screen first, then closes the dialog.

Addresses: `#/trial/{id}`, `#/trial/{id}/details`, `#/learn/{step}`, `#/practice`, `#/practice/study/{id}`, `#/practice/exam`.

Keyboard: skip link, `/` focuses search, arrow keys move between markers, Enter opens the snapshot, and Tab stays inside an open dialog.

## Trial schema

`js/data/trials.js` assigns `window.ANTIPLATELET_TRIALS`, an array of cards. Every card uses the same fields.

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Unique. Used in the address |
| `placeholder` | boolean | `true` while the card is only a layout sample |
| `acronym` | string | Marker label |
| `year` | number | Position on the axis. The axis starts in 1999 |
| `yearLabel` | string | Text shown with the year |
| `topic` | string | A topic `id` from `js/data/topics.js` |
| `status` | string | `published`, `recent`, or `pending` |
| `title` | string | Placeholders use the exact label below |
| `citation` | string | Bibliographic line |
| `pmid` | string | PubMed identifier. `pmid` or `doi` is required |
| `doi` | string | DOI. `pmid` or `doi` is required |
| `design` | string | Study design, described |
| `population` | string | Who was enrolled, described |
| `intervention` | string | What was assigned, described |
| `comparator` | string | Comparison arm, described |
| `primaryResult` | string | Primary endpoint result, described |
| `safety` | string | Safety findings, described |
| `takeaway` | string | Key takeaway |
| `limitations` | string | Limits of the study |
| `guidelines` | array | May be empty. Each entry is a document that cites the trial |
| `sources` | array | At least one source |
| `sourceNotes` | array of strings | Optional. Where each number was read |
| `crossSite` | object | Optional. Link when the same trial is covered on the anticoagulation timeline |
| `reviewedBy` | — | Do not set this on a card. The site field stays `""` |

Guideline object: `society`, `document`, `year` (number, same year as the trial or later), `locus` (section, table, or page where the trial is cited), and `source` (where that locus was read). `url` is optional.

Source object: `label`, plus at least one of `pmid`, `doi`, or `url`. `note` is optional.

`crossSite`, when present:

```js
{
  label: "Text of the link",
  href: "https://rockyman10.github.io/anticoag-timeline/#/trial/{id}"
}
```

`href` must start with `https://rockyman10.github.io/anticoag-timeline/`. Omit `crossSite` when the anticoagulation timeline does not cover that trial. On a placeholder card, `label` must include `EXAMPLE, not a real trial`.

A placeholder sets `placeholder: true` and its `title` includes:

```text
EXAMPLE, not a real trial
```

The two skeleton cards use that sentence as the whole title. Their years (2005 and 2014) only place the sample markers on the axis.

## Question schema

`js/data/questions.js` assigns `window.ANTIPLATELET_QUESTIONS`:

```js
{
  meta: { title: "Practice questions", examDurationSeconds: 120 },
  items: [ /* items */ ]
}
```

Each item:

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | Unique |
| `placeholder` | boolean | `true` for layout samples |
| `topic` | string | Topic `id` |
| `relatedTrialId` | string | A trial `id` |
| `stem` | string | Placeholders include `EXAMPLE, not a real trial` |
| `choices` | array | At least two `{ id, text }` objects. Choice ids are unique inside the item |
| `correctId` | string | Matches one choice `id` |
| `explanation` | string | Why the keyed choice is the key |
| `source` | object | `label` plus `pmid`, `doi`, or `url` |

Study mode shows the explanation after an answer. Exam mode times the sitting from `examDurationSeconds` and holds explanations until submit. The skeleton sitting is 120 seconds.

## Content rules

Write in a descriptive voice. State what a study reported. Do not write an order to give, hold, start, stop, or prescribe a medication.

Do not put a disclaimer on a card. The footer carries the one educational-resource notice.

Add a guideline only when that guideline cites the trial, and record the locus (section, table, or page). A guideline list may be empty.

Every number in reader-visible card or question prose needs a source on that card or item (`pmid`, `doi`, or `url`). `year` and `yearLabel` place the marker. Outcome numbers belong in the prose fields and in `sourceNotes` once a real card is written.

Short forms may appear on a card only when `js/site-meta.js` defines them. Write other terms in full.

`reviewedBy` in `js/site-meta.js` stays an empty string.

`node scripts/verify-integrity.js` checks the schema, unique ids, required source fields, an empty `reviewedBy`, and rejects these reader-visible strings: `NOAC`, `Practice-changer`, `Practice-defining`, `Tier`, `Evidence quality`, and `not a dosing order`. Placeholder entries are reported as info. The check must finish with 0 errors and 0 warnings. `CHANGELOG.md` and `README.md` are not reader-visible and are not scanned.

```bash
node scripts/verify-integrity.js
node --check js/app.js
node --check js/site-meta.js
node --check js/data/topics.js
node --check js/data/trials.js
node --check js/data/questions.js
node --check js/learn-path.js
```

Pull requests run the same check in `.github/workflows/verify-integrity.yml`.

## GitHub Pages

After this work is on `main`, turn Pages on with this setting:

**Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` → Folder: `/ (root)` → Save.**

The site is published at `https://rockyman10.github.io/antiplatelet-timeline/`. `.nojekyll` is in the root so Pages serves the files as they are. No build command is required.

## Theme

The palette is platelet purple on warm lilac paper (`#6b215f` on `#f4e9f2`, Fraunces and Atkinson Hyperlegible). Lane colors stay inside that purple family. The anticoagulation timeline uses terracotta and Source Serif, and the critical care timeline uses teal and Newsreader, so the three sites are not mistaken for one another.
