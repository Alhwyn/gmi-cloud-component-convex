# GMI Cloud Component for Convex

An unpublished starter based on
[Convex's official component template](https://github.com/convex/templates/tree/13ad1074979160b850e172f8165d463b4352320f/template-component).
It uses a sample comments feature to demonstrate installing, calling, and testing
a component. It does not call GMI Cloud yet.

## Develop

Use Node.js 22.12+ (22.x) or 24.x and npm:

```sh
npm ci
npm run verify
```

- [Component backend](src/component) and [client helpers](src/client)
- [Example app](example) that mounts and calls the component
- [Tests](test) for a host app consuming the package
- [Verification](verification) for local checks and Convex directory preparation

To run the example, start `npm run dev` from the repo root and
`npm run dev:frontend` in a second terminal. Use only demo data: the example
exposes sample comments without production authorization, and its optional
translation action sends comment text to the template's external translation
service.
