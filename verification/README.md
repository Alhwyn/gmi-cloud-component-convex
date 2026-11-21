# Verification

## Run the scaffold checks

1. `npm ci` installs the versions in the lockfile and builds the package.
2. `npm run verify` runs the build, tests, type checks, lint, example bundle,
   and an npm package dry run. It does not publish anything.
3. In a fresh checkout with no deployment credentials, run
   `CONVEX_AGENT_MODE=anonymous npm run test:e2e` to generate types and load the
   example app into a local Convex backend. This may download the backend
   binary. CI also checks that code generation leaves no uncommitted changes.

## Before submitting to the Convex Components directory

- Replace the template's sample comments with the GMI Cloud integration. Add
  tests for the public API, authorization, and provider error handling.
- Document configuration, credential handling, and usage. Replace the demo
  with a working GMI Cloud example that does not expose secrets.
- Run the checks above from a clean checkout. Choose a public package name and
  publish the verified package when it is ready; npm publishing is disabled
  in this starter.
- Run [Convex's component checker](https://www.convex.dev/components/submit/check)
  with the published package, resolve its findings, and then use the
  [directory submission form](https://www.convex.dev/components/submit).
  The repo scaffold alone does not qualify for listing.
