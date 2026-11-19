# Phase 1 antiplatelet cards: sources and omissions

Date: 2026-11-19 (America/Chicago). Updated after the AP Lit Inspector FIX pass. Draft data: `/workspace/antiplatelet/phase1/trials-draft.js` (cards) and `topics-draft.js` (lanes). Pre-fix copy: `trials-draft.pre-fix.js`; diff: `fixes.diff`.

## Method

- Every full card was written from the structured PubMed abstract fetched with E-utilities `efetch` (db=pubmed, retmode=xml); raw abstracts are in `abstracts.txt`.
- Source used for all 43 full cards: **PubMed abstract only**. Open full text (PMC) exists for some trials (listed per card) but was not read, so nothing on a card depends on it.
- Machine check (`build.py`): every number printed in a card's design, population, intervention, comparator, primaryResult, secondaryResults, safety, takeaway and limitations fields is tested against the abstract text. All 43 cards pass; the only flagged token is the '1' in the phrase 'included 1' on TIPS-3 (a CI phrase, not a figure).  Each card's `sourceNotes` lists, per field, the abstract sentences containing its numbers.
- No numbers were computed or converted. '%' is used throughout (the abstracts' 'percent' is written as '%' on every card).
- `guidelines` is **empty on every record (all 47)**. Confirming that a guideline cites a trial, with locus, needs the guideline's reference list, which was not checked. No guideline citations were invented.
- `reviewedBy` is empty on every record. No change history is in these files.
- Schema follows the critical care site's `js/data/trials.js` (id, placeholder, acronym, year, yearLabel, topic, status, title, citation, pmid, doi, design, population, intervention, comparator, primaryResult, safety, takeaway, limitations, guidelines, sources, sourceNotes) plus `reviewedBy`. **New field for the site PR: `secondaryResults`** (string; empty when the abstract has no secondary or other non-safety results). The critical care schema has no equivalent. `safety` now holds only safety and bleeding outcomes (plus adverse events, hemorrhagic stroke, treatment discontinuation). `secondaryResults` holds secondary efficacy results, subgroup results, mortality, stent thrombosis, ischemic events, cancer outcomes, and dose switching and exposure (ADAPTABLE). `topic` is the lane id. Link-only stubs use `status: "link-only"` and a `crossSite` object and carry no design, population, result or safety text.
- Year is the journal issue year from PubMed. Citation is built from the PubMed author list (first three authors, then 'and others'), title, journal, issue and pages.
- 'The abstract does not report...' sentences were removed from card limitations (they read as per-card disclaimers) and are listed under each card below.

## Errata (PubMed CommentsCorrections and journal pages)

- **CREDO (PMID 12435254): erratum JAMA 2003;289(8):987 (doi 10.1001/jama.289.8.987), read on the JAMA Network correction page (https://jamanetwork.com/journals/jama/fullarticle/196021).** It corrects Table 1 (statin use), Table 3 (bleeding counts: 1-year CABG and non-CABG bleeding; 28-day any major, nonprocedural, procedural major and minor bleeding), Table 4 (28-day death or MI, MI, stroke, revascularization rows and RRRs), Figure 3 panel B and Figure 5 (ACS-yes subgroup counts and RRRs). It ends 'None of these corrections substantively affects the results or conclusions of the article.' **Confirmed not to affect the abstract figures used on the card**: 26.9% relative reduction (95% CI 3.9% to 44.4%; P=.02; absolute reduction 3%), 18.5% (95% CI -14.2% to 41.8%; P=.23), 38.6% (95% CI -1.6% to 62.9%; P=.051), and 1-year major bleeding 8.8% versus 6.7% (P=.07) do not appear among the corrected items. The card has no figure from the corrected tables. The abstract text on the journal's DOI page (retrieved through search) shows the same figures as the PubMed abstract. (The erratum text was read from the journal page via search; the page could not be re-fetched directly in this pass, so the full-page fetch was not repeated.)
- CURE (11519503): two errata (NEJM 2001;345:1506 and 1716); the abstract already carries '2.2 percent [corrected]', which the card uses.
- JPAD (18997198): errata JAMA 2009;301:1882 (adverse-event counts, Table 3) and JAMA 2012;308:1861 (Table 1 smoking data); neither concerns a figure on the card (per AP Lit Inspector; not independently re-read).
- SMART-CHOICE (31237645): erratum JAMA 2019;322:1316, author-name spelling only.

## Counts per lane

- ACS P2Y12 choice: 8 full cards + 1 link-only stub(s)
- PCI and DAPT duration: 7 full cards
- De-escalation and P2Y12 monotherapy: 8 full cards
- Stroke and TIA: 8 full cards
- Aspirin prevention: 8 full cards + 1 link-only stub(s)
- PAD and vascular: 4 full cards + 2 link-only stub(s)
- Total: 43 full cards, 4 stubs

## Stubs (crossSite ids verified against https://raw.githubusercontent.com/rockyman10/anticoag-timeline/main/js/data/trials.js, 122 trials)

- **COMPASS**: record id `compass`, lane `pad-vascular`, crossSite id `compass` (exists in anticoag trials.js), PMID 28844192, DOI 10.1056/NEJMoa1709118, URL https://rockyman10.github.io/anticoag-timeline/#/trial/compass. Source used: PubMed record for citation, title, DOI and PMID only; no clinical numbers.
- **VOYAGER PAD**: record id `voyager-pad`, lane `pad-vascular`, crossSite id `voyager-pad` (exists in anticoag trials.js), PMID 32222135, DOI 10.1056/NEJMoa2000052, URL https://rockyman10.github.io/anticoag-timeline/#/trial/voyager-pad. Source used: PubMed record for citation, title, DOI and PMID only; no clinical numbers.
- **ATLAS ACS 2–TIMI 51**: record id `atlas-acs-2`, lane `acs-p2y12`, crossSite id `atlas-acs2` (exists in anticoag trials.js), PMID 22077192, DOI 10.1056/NEJMoa1112277, URL https://rockyman10.github.io/anticoag-timeline/#/trial/atlas-acs2. Source used: PubMed record for citation, title, DOI and PMID only; no clinical numbers.
- **AQUATIC**: record id `aquatic`, lane `aspirin-prevention`, crossSite id `aquatic` (exists in anticoag trials.js), PMID 40888725, DOI 10.1056/NEJMoa2507532, URL https://rockyman10.github.io/anticoag-timeline/#/trial/aquatic. Source used: PubMed record for citation, title, DOI and PMID only; no clinical numbers.

## Per card

### ACS P2Y12 choice

- **CURE** (2001): PMID 11519503, DOI 10.1056/NEJMoa010746. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report results by revascularization status.”
- **COMMIT** (2005): PMID 16271642, DOI 10.1016/S0140-6736(05)67660-X. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report outcomes after discharge.”
- **CLARITY-TIMI 28** (2005): PMID 15758000, DOI 10.1056/NEJMoa050522. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not print the bleeding rates.”
- **TRITON-TIMI 38** (2007): PMID 17982182, DOI 10.1056/NEJMoa0706482. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not break results down by bleeding-risk subgroup.”
- **PLATO** (2009): PMID 19717846, DOI 10.1056/NEJMoa0904327. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report results by geographic region, by invasive or medical management, or by aspirin dose.”
- **CURRENT-OASIS 7** (2010): PMID 20817281, DOI 10.1016/S0140-6736(10)61088-4. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract reports 30-day outcomes only.”
- **ACCOAST** (2013): PMID 23991622, DOI 10.1056/NEJMoa1308075. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not print the absolute event rates for the primary end point or for TIMI major bleeding.”
- **ISAR-REACT 5** (2019): PMID 31475799, DOI 10.1056/NEJMoa1908973. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not describe the dosing of either drug.” “The abstract does not report an analysis by clinical presentation or by the degree of invasive management actually performed.”
### PCI and DAPT duration

- **CREDO** (2002): PMID 12435254, DOI 10.1001/jama.288.19.2411. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **PRODIGY** (2012): PMID 22438530, DOI 10.1161/CIRCULATIONAHA.111.071589. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not print the bleeding rates or hazard ratios, so the bleeding difference is described only qualitatively.”
- **DAPT** (2014): PMID 25399658, DOI 10.1056/NEJMoa1409312. Source used: PubMed abstract only. Open full text exists (PMC PMC4481318); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The thienopyridine was clopidogrel or prasugrel, and the abstract does not print the results separately by drug.” “The abstract reports the death rates as 2.0% versus 1.5% (hazard ratio 1.36; P=0.05) without describing causes.”
- **PEGASUS-TIMI 54** (2015): PMID 25773268, DOI 10.1056/NEJMoa1500857. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report the individual components of the primary end point or all-cause mortality.”
- **ISAR-SAFE** (2015): PMID 25616646, DOI 10.1093/eurheartj/ehu523. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **SMART-DATE** (2018): PMID 29544699, DOI 10.1016/S0140-6736(18)30493-8. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report the cause of the myocardial infarction difference.”
- **MASTER DAPT** (2021): PMID 34449185, DOI 10.1056/NEJMoa2108749. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
### De-escalation and P2Y12 monotherapy

- **TROPICAL-ACS** (2017): PMID 28855078, DOI 10.1016/S0140-6736(17)32155-4. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **GLOBAL LEADERS** (2018): PMID 30166073, DOI 10.1016/S0140-6736(18)31858-0. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **TWILIGHT** (2019): PMID 31556978, DOI 10.1056/NEJMoa1908419. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **SMART-CHOICE** (2019): PMID 31237645, DOI 10.1001/jama.2019.8146. Source used: PubMed abstract only. Open full text exists (PMC PMC6593635); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not name the P2Y12 inhibitors used.”
- **STOPDAPT-2** (2019): PMID 31237644, DOI 10.1001/jama.2019.8145. Source used: PubMed abstract only. Open full text exists (PMC PMC6593641); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **TICO** (2020): PMID 32543684, DOI 10.1001/jama.2020.7580. Source used: PubMed abstract only. Open full text exists (PMC PMC7298605); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **HOST-EXAM** (2021): PMID 34010616, DOI 10.1016/S0140-6736(21)01063-1. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The primary outcome is a composite, and the abstract does not print the individual components.” “The abstract prints only the composite primary outcome (which includes BARC bleeding type 3 or greater); it does not print separate bleeding rates or the other component rates. (Removed from the safety field.)”
- **TALOS-AMI** (2021): PMID 34627490, DOI 10.1016/S0140-6736(21)01445-8. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
### Stroke and TIA

- **MATCH** (2004): PMID 15276392, DOI 10.1016/S0140-6736(04)16721-4. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not print the major bleeding rates.”
- **SPS3** (2012): PMID 22931315, DOI 10.1056/NEJMoa1204133. Source used: PubMed abstract only. Open full text exists (PMC PMC4067036); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not state the duration of study treatment; it gives mean follow-up of 3.4 years only.” “The abstract does not explain the mortality difference beyond noting that fatal hemorrhages did not account for it.”
- **CHANCE** (2013): PMID 23803136, DOI 10.1056/NEJMoa1215340. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **SOCRATES** (2016): PMID 27160892, DOI 10.1056/NEJMoa1603060. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract reports the 90-day treatment period only.”
- **POINT** (2018): PMID 29766750, DOI 10.1056/NEJMoa1800410. Source used: PubMed abstract only. Open full text exists (PMC PMC6193486); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **THALES** (2020): PMID 32668111, DOI 10.1056/NEJMoa1916870. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract reports a 30-day regimen and outcomes only.”
- **CHANCE-2** (2021): PMID 34708996, DOI 10.1056/NEJMoa2111749. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **INSPIRES** (2023): PMID 38157499, DOI 10.1056/NEJMoa2309137. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract notes the statin comparison from the factorial design is not reported in this paper.”
### Aspirin prevention

- **WHS** (2005): PMID 15753114, DOI 10.1056/NEJMoa050613. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not print absolute event rates.”
- **JPAD** (2008): PMID 18997198, DOI 10.1001/jama.2008.623. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not print the bleeding rates.”
- **AAA** (2010): PMID 20197530, DOI 10.1001/jama.2010.221. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **ARRIVE** (2018): PMID 30158069, DOI 10.1016/S0140-6736(18)31924-X. Source used: PubMed abstract only. Open full text exists (PMC PMC7255888); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **ASCEND** (2018): PMID 30146931, DOI 10.1056/NEJMoa1804988. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report the individual components of the serious vascular event outcome.”
- **ASPREE** (2018): PMID 30221596, DOI 10.1056/NEJMoa1800722. Source used: PubMed abstract only. Open full text exists (PMC PMC6426126); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **TIPS-3** (2021): PMID 33186492, DOI 10.1056/NEJMoa2028220. Source used: PubMed abstract only. Open full text exists (PMC PMC7116860); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not print aspirin-specific bleeding rates.”
- **ADAPTABLE** (2021): PMID 33999548, DOI 10.1056/NEJMoa2102137. Source used: PubMed abstract only. Open full text exists (PMC PMC9908069); not used. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not state which dose is the reference group for either hazard ratio. This sentence is also kept in primaryResult and safety.”
### PAD and vascular

- **CHARISMA** (2006): PMID 16531616, DOI 10.1056/NEJMoa060989. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): none.
- **TRA 2P-TIMI 50** (2012): PMID 22443427, DOI 10.1056/NEJMoa1200933. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not state the standard therapies patients were receiving beyond 'standard therapy', and does not report results by qualifying condition.”
- **EUCLID** (2017): PMID 27959717, DOI 10.1056/NEJMoa1611688. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report results by qualifying criterion (ABI versus previous revascularization).”
- **THEMIS** (2019): PMID 31475798, DOI 10.1056/NEJMoa1908077. Source used: PubMed abstract only. Guidelines: left empty (not verified). Abstract-scope notes (removed from limitations): “The abstract does not report a PCI-subgroup analysis.”

## Left out across the set (not printed in the abstracts, so not on any card)

- Subgroup, regional and per-stent or per-drug breakdowns, unless the abstract itself prints them (examples left out: THEMIS-PCI subgroup, PLATO regional results, TRITON-TIMI 38 bleeding-risk subgroups, CHANCE-2 and INSPIRES secondary outcomes).
- Absolute event rates or hazard ratios the abstract does not print (for example PRODIGY bleeding rates, MATCH major bleeding rate, WHS absolute rates, HOST-EXAM separate component rates).
- Blinding, dosing, or enrolment details the abstract does not state.
- Anything that would need the full text. No card was filled in from memory.
- Guideline citations (all `guidelines` arrays are empty).
