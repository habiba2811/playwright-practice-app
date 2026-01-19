# Playwright Practice

This project is focused on practicing Playwright UI automation against a real
component library (PrimeNG), with emphasis on realistic user interactions,
reliable assertions, and readable test structure.

## What is covered
- Form Layout page interactions: Vertical, Horizontal, Vertical Grid, Help Text,
  and Advanced form cards.
- Field behaviors: fill, clear, sequential typing, value assertions, combobox
  selection.

## Project setup
```bash
npm install
```

## Running tests
```bash
# Run the focused UI spec in headed mode
npm run test:ui

# Or run the full suite
npx playwright test
```

## Demo GIF
![UI Components Demo](demo.gif)

## Configuration notes
- Base URL: `https://sakai.primeng.org/uikit/formlayout`
- Reporter: HTML (`playwright-report/`)
- Slow motion: `1000ms` to make interactions easier to follow
- Browser project: Chromium (other browsers are present but commented out)

## Key files
- `tests/uiComponents.spec.ts` UI form layout tests
- `playwright.config.ts` Playwright configuration
