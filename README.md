# STEWARD

**Simple Transparency & Education With Accessible Resident Data**

STEWARD is a resident-facing capital-project transparency application for the
Town of North Castle, New York. It explains what each project is, where it is in
the public process, how much it may cost, how it is or may be funded, and what
impact—if any—can responsibly be shown for residents.

## Open the application

No installation is required. Open `index.html` in a web browser.

For the most reliable local preview, run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Current projects

- Bedford Road Redevelopment
- Water District No. 9 Extension
- IBM Community Park Turf Fields
- Town Pool Renovation

## Project standard

Every project is organized around the same questions:

1. What is being proposed or built?
2. What is the timeline and current stage?
3. What has been estimated, approved, bid, awarded or spent?
4. How is it funded?
5. Is there a documented resident impact?
6. Where does every number come from?
7. What still needs verification?

## Data rules

- Never present an estimate as an award or final cost.
- Never calculate household impact without authoritative inputs and a documented method.
- Use assessed property value, not market value, when the source formula requires assessed value.
- Link every important number to its source.
- Show when a source is secondary.
- Include who verified an update and the date checked.

## Repository structure

```text
STEWARD_GitHub/
├── index.html
├── styles.css
├── app.js
├── data/
│   └── projects.js
├── assets/
│   ├── documents/
│   └── images/
└── docs/
    ├── SCOUT_MAINTENANCE_GUIDE.md
    └── SOURCE_VERIFICATION_CHECKLIST.md
```

## Updating a project

Most content and numbers live in `data/projects.js`. Edit the appropriate
project object, test the application, and complete the source-verification
checklist before committing the change.

## Important disclaimer

STEWARD provides educational estimates. It is not an official tax bill,
financial statement or guarantee that a proposed project will be approved.
Consult current Town records before making financial decisions.
