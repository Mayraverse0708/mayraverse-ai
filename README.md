# MAYRAVERSE AI — V1.2

Independent AI Cinema Story & Production Studio starter. No Higgsfield dependency.

## What works now
- Next.js App Router UI
- Dashboard, New Project, Story Builder, Episode Builder, Character Library, Scene Studio
- Project creation API
- Local browser project persistence
- MAYRAVERSE Brain demo scene generation
- Copy-ready Gemini image prompt, Google Flow video prompt + camera movement, and 10-sec Hindi VO
- Character lock / continuity rules scaffold
- PostgreSQL schema for the next backend phase

## Run locally
1. Install Node.js 20+
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:3000`

## Production phase
The current app intentionally uses demo generation. To make it a live AI service, add server-side provider adapters, authentication, PostgreSQL connection, object storage, usage limits and real provider APIs. Never expose provider API keys in the browser.
