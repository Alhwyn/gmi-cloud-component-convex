# Tests

From the repo root, run `npm ci` and `npm test`. To rerun only the package
smoke test, run `npm test -- test/package.test.ts`.

The package smoke test imports the same client and test helper as a consumer.
It registers the component and writes and reads an example comment using an
in-memory Convex app. The template's component, client, and example app tests
stay alongside their Convex module setup. None of these tests need a Convex
account, GMI Cloud credentials, or external services. The backend smoke test
in [Verification](../verification/README.md) checks that the example app can
mount the packaged component in the Convex runtime.
