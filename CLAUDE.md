# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a FiveM resource built with React TypeScript frontend and Lua backend scripts. It follows a standard FiveM NUI (web interface) pattern with client-side, server-side, and web UI components communicating through NUI callbacks and network events.

## Project Structure

- **`/client/`** - Client-side Lua scripts that run on players' game clients
- **`/server/`** - Server-side Lua scripts (currently minimal)
- **`/web/`** - React TypeScript frontend that renders in the game's NUI frame
- **`fxmanifest.lua`** - FiveM resource manifest defining the resource structure

## Development Commands

All web development commands must be run from the `web/` directory:

### Web UI Development
```bash
cd web
npm install              # Install dependencies
npm run start           # Development server for browser testing
npm run start:game      # Watch mode for in-game development
npm run build           # Production build
npm run lint            # Run ESLint
npm run lint:fix        # Fix ESLint issues automatically
```

### FiveM Resource Development
The resource uses watch mode for in-game development:
```bash
cd web && npm run start:game
```

This builds the web UI and watches for changes, automatically rebuilding when files are modified.

## Architecture

### NUI Communication Pattern
The resource follows FiveM's standard NUI communication model:

**Client → Web UI (React):**
- Uses `SendReactMessage(action, data)` helper function in `client/utils.lua`
- React components receive messages via `useNuiEvent` hook

**Web UI → Client:**
- Uses `fetchNui(eventName, data)` utility function
- Triggers registered NUI callbacks on client-side

### Core Files

**Client-side (`/client/`):**
- `client.lua` - Main client script handling NUI visibility, page routing, and network events
- `utils.lua` - Utility functions including `SendReactMessage()` and debug helpers

**Web UI (`/web/src/`):**
- `App.tsx` - Main React application with routing setup
- `hooks/useNuiEvent.ts` - Custom hook for receiving NUI messages from game
- `utils/fetchNui.ts` - Utility for sending data back to game client
- `utils/debugData.ts` - Development helper for browser testing

### Key Communication Events

**Network Events (Server ↔ Client):**
- `YBN.UI:Open` - Opens the UI with coin data
- `YBN.UI:Close` - Closes the UI
- `YBN.UI:setPage` - Opens UI and navigates to specific page

**NUI Callbacks (Web → Client):**
- `hideFrame` - Closes the UI
- `createNotification` - Triggers in-game notification

**NUI Messages (Client → Web):**
- `setVisible` - Controls UI visibility
- `setCoins` - Updates coin display data
- `setPage` - Handles page navigation

## Development Notes

### Browser Development
The project includes browser development support through `debugData.ts`. When developing in a browser, mock data is automatically injected to simulate game environment.

### Code Style
- ESLint configured with TypeScript, React, and React Hooks rules
- Lint-staged with Husky for pre-commit hooks
- Uses Vite for fast development builds
- SCSS support for styling

### FiveM Integration
- Resource name is dynamically detected for NUI callbacks
- Debug mode controlled via convar: `[resource-name]-debugMode`
- UI focus management handled automatically with `SetNuiFocus`

### Testing
Test the resource by:
1. Starting the FiveM resource
2. Using in-game commands or events to trigger UI
3. For browser testing: `cd web && npm run start`
- Jamais mettre claude en copyright ou autre dans les commit, code etc
- Avant de push vérifie toujours que le build fonctionne sans erreur