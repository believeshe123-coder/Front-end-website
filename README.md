# Front-end Website

A simple Next.js and Tailwind CSS website with a shared navigation bar and pages for Home, Services, About us, and Contact us.

## Registry configuration

This project pins npm to the public npm registry in `.npmrc`:

```ini
registry=https://registry.npmjs.org/
package-lock=true
```

If `npm install` returns `403 Forbidden`, first inspect the active npm configuration and proxy environment variables:

```bash
npm config get registry
npm config get proxy
npm config get https-proxy
env | sort | sed -n '/NPM\|npm\|PROXY\|proxy/p'
```

A `403 Forbidden` while connecting to `https://registry.npmjs.org/` usually means the current network or proxy policy is blocking access to the npm registry. In that case, either use a network with npm registry access or configure npm to use your organization's approved registry/proxy.

## Install dependencies

`package.json` includes the required application dependencies: `next`, `react`, and `react-dom`.

Run this from the repository root to install dependencies exactly as declared by `package.json`:

```bash
npm install
```

If you need to explicitly add or refresh the core Next.js dependencies, run:

```bash
npm install next@latest react@latest react-dom@latest
```

## Build

After dependencies install successfully, build the production app:

```bash
npm run build
```

## Develop locally

Start the development server:

```bash
npm run dev
```
