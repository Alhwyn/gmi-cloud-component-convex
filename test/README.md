# Tests

From the repo root, run `npm ci` and `npm test`. To rerun only the package
smoke test, run `npm test -- test/package.test.ts`.

The package smoke test imports the same config, client, and test helper as a
consumer. It mounts the component and writes and reads an example comment using
an in-memory Convex app. The template's component, client, and example app tests
stay alongside their Convex module setup. None of these tests need a Convex
account, GMI Cloud credentials, or external services.
