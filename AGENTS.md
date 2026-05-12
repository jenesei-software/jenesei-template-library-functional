# AGENTS.md

Guidance for AI coding agents working in this repository.

## Project overview

This repository is a template for TypeScript functional libraries.

This is not a React application and not a UI component kit.

Core stack:

- TypeScript
- Vite library mode
- vite-plugin-dts
- Biome

Published output is the generated `build/` directory.

## Repository structure

Important paths:

- `src/` — library source
- `src/index.ts` — root public API
- `vite.config.ts` — build source of truth
- `tsconfig.json` — compiler/type rules
- `build/` — generated output

## Commands

Use npm.

```bash
npm run typecheck
npm run biome:lint:check
npm run biome:format:check
npm run build
```

Minimum validation:

```bash
npm run typecheck
npm run biome:lint:check
npm run build
```

## TypeScript rules

- keep strict typing
- do not weaken compiler checks
- avoid unnecessary any
- preserve declaration generation compatibility
- exported APIs should have intentional stable types

## Imports

Use:

- `@local/*`

Import order:

1. `@local/**`
2. package imports
3. relative imports

Avoid circular imports.

## Library design rules

This template is for reusable functional libraries.

Prefer:

- pure functions
- deterministic behavior
- composable APIs
- explicit input/output contracts
- minimal side effects
- tree-shakeable exports

Avoid:

- framework coupling unless intentional
- browser-specific assumptions unless required
- application business logic
- hidden mutable global state
- unnecessary runtime dependencies

## Build rules

- vite.config.ts defines library build behavior
- do not manually edit generated build artifacts
- keep sourcemaps unless intentionally changing release behavior
- declare externals intentionally if dependencies should not be bundled

## Dependencies

Before adding dependencies:

- prefer native TypeScript/JS utilities when practical
- avoid heavy runtime dependencies
- avoid overlapping utility libraries

## Build artifacts

Never manually edit:

- build/

## Safe completion checklist

Before finishing:

- typecheck passes
- lint passes
- build passes
- exports remain intentional
- no circular dependencies introduced
- generated output not manually edited
