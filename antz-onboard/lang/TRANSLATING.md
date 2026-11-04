# Translating the Antz Onboarding Guide

Source: `lang/en.json`. Output: `lang/<code>.json` with exactly the same structure and keys.

## Rules
1. Translate every string value. Never change keys, never add or remove entries, keep arrays the same length and order.
2. Keep placeholders exactly as written: `{x}`, `{n}`, `{i}`, `{q}`, `{email}`. Move them wherever the grammar needs them (e.g. Japanese `{x}を検索`).
3. Do not translate: "Antz", "Antz Systems", "info@antzsystems.com", file paths (the keys inside `shots`), IDs and codes such as "AID 425990", "MED29-18846", person names, place and site names (e.g. "Central Reserve Kingdom", "Pride Rock Enclosure"), scientific species names.
4. Keep the separators " · " and the suffixes " · App" / " · Web" / "(App)" / "(Web)" in module titles; translate the rest of the title.
5. Audience: staff at zoos and animal-care institutions (keepers, vets, curators, admins) learning software they already use. Use the register normal for professional software in your language (e.g. German "Sie", French "vous").
6. Use correct zoo, veterinary and animal-management terms (enclosure, necropsy, deworming, carcass, fetal death, nursery, incubator, hospitalisation, prescription, dosage, batch number).
7. Labels that appear on the app's English screens (button and menu names such as "Carcass Transfers", "Approve", "My Notes") can be translated in titles, but when a description names an on-screen control, keep the English label in quotes after the translation, e.g. „Genehmigen“ ("Approve"), only where it helps the reader find it.
8. `ui["search.none"]`: replace the three example words with the target-language words for animal, egg and report.
9. `summary` is one short line; keep it short. `alt` texts describe a screenshot for screen readers.
10. Set `meta` to: {"lang": "<code>", "source": false, "reviewed": false, "translator": "machine (Claude)"}.
11. Output must be valid JSON (UTF-8, no comments, no trailing commas). Use the language's own quotation marks inside strings where natural.
