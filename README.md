# Techfest, IIT Bombay — Festival Landing Page

A futuristic, responsive landing page concept for **Techfest, IIT Bombay**, designed to help visitors discover competitions, workshops, exhibitions, lectures, and festival experiences. The interface uses a dark visual theme, high-contrast typography, event imagery, and interactive event/registration modals.

> **Project note:** This repository contains a website concept/demo. Confirm event details, dates, statistics, partnerships, registration links, and branding against official Techfest sources before publishing it as an official website.

## Features

- **Hero section** with primary calls to action.
- **Festival identity and metrics** section.
- **Event discovery** with categorized event content.
- **Featured competitions** including Robowars and Meshmerize.
- **Workshop and learning** section.
- **Festival experience** section for campus atmosphere and stage shows.
- **Schedule** section for the three-day programme.
- **Event details modal** to inspect an event.
- **Registration modal** with optional preselected event/track.
- **Reusable React components** for navigation, content sections, calls to action, and footer.
- **Responsive styling** using Tailwind CSS utilities and custom CSS.
- **SEO/social metadata** in the HTML document.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React 19 | UI and component architecture |
| TypeScript | Typed components and event data |
| Vite | Local development server and production build |
| Tailwind CSS 4 | Utility-first styling |
| Motion | UI animation support |
| Lucide React | Icons |
| Node.js + npm | Runtime and dependency management |

The package manifest also includes Express, dotenv, and Google GenAI dependencies. The current frontend source should be checked before assuming these packages are actively used by the application.

## Project Structure

```text
.
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .env.example
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── data/
    │   └── techfestData.ts
    ├── assets/
    │   └── images/
    └── components/
        ├── Navbar.tsx
        ├── HeroSection.tsx
        ├── IdentityMarquee.tsx
        ├── EventDiscovery.tsx
        ├── CompetitionSpotlight.tsx
        ├── WorkshopSection.tsx
        ├── FestivalExperience.tsx
        ├── ScheduleSection.tsx
        ├── FinalCTA.tsx
        ├── Footer.tsx
        ├── EventModal.tsx
        └── RegistrationModal.tsx
```

## Requirements

- Node.js (use a current LTS release)
- npm

Check your installed versions:

```bash
node --version
npm --version
```

## Run Locally

1. **Extract or clone the project** and open a terminal in the project directory.
2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the development server:**

   ```bash
   npm run dev
   ```

4. Open the local URL printed by Vite in the terminal. The configured development server uses port `3000` by default.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server on port 3000 |
| `npm run build` | Creates a production build in `dist/` |
| `npm run preview` | Serves the production build locally for preview |
| `npm run lint` | Runs the TypeScript compiler without emitting files |
| `npm run clean` | Removes generated `dist/` output and `server.js` (Unix-like shell command) |

Run a production build before deployment:

```bash
npm run build
npm run preview
```

## Updating Event Content

Event and schedule content is organized in:

```text
src/data/techfestData.ts
```

The data model includes fields such as:

- `id`, `title`, `category`, and `tagline`
- `description` and `details`
- `venue`, `date`, and `image`
- `eligibility` and optional `teamSize`
- `registrationOpen` and `officialPath`
- Optional event statistics

To add or update an event, keep its `id` unique and ensure the category matches the TypeScript union:

- `Competitions`
- `Workshops`
- `Exhibitions`
- `Lectures & Shows`

Use verified event information and working official URLs. Check image paths after moving or renaming assets.

## Environment Variables

An `.env.example` file is included. It documents these variables:

```env
GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
APP_URL="YOUR_APP_URL"
```

- `GEMINI_API_KEY` is needed only if you implement or enable features that call the Gemini API.
- `APP_URL` should be the deployed app URL only if the application code uses it.

Create a local `.env.local` file when required by your implementation, and never commit real API keys or secrets. The inspected frontend source does not currently show a direct Google GenAI import, so verify whether these variables are needed before configuring them.

## Design and Customization

- Global styles and theme utilities: `src/index.css`
- Page composition and modal state: `src/App.tsx`
- Reusable UI sections: `src/components/`
- Event and schedule data: `src/data/techfestData.ts`
- Document title, description, fonts, and social metadata: `index.html`
- Local image assets: `src/assets/images/`

The visual system uses a dark navy/black foundation with cyan accents, modern sans-serif typography, and event photography. Keep contrast, responsive behavior, and keyboard accessibility in mind when modifying the design.

## Deployment

This is a Vite frontend. A typical deployment workflow is:

1. Install dependencies with `npm install`.
2. Run `npm run build`.
3. Deploy the generated `dist/` directory to a static hosting provider that supports single-page frontend assets.
4. Configure the provider's build command as `npm run build` and output directory as `dist`.

If a host needs client-side route fallback, configure it to serve `index.html` for application routes. This project currently presents a single landing page, so no backend service should be assumed unless one is added and configured separately.

## Before Publishing

- Verify all dates, venues, event details, statistics, prize pools, patronage claims, and partner logos/claims.
- Ensure registration actions lead to a working and authorized registration flow.
- Confirm external links and image licenses/permissions.
- Test on mobile, tablet, and desktop viewports.
- Run `npm run build` and `npm run lint`.
- Add a license file if you intend to distribute the project; the source files include an Apache-2.0 SPDX comment in at least one file, but that alone does not establish the license for the entire repository.

## Contributing

1. Create a feature branch.
2. Make focused changes and keep components reusable.
3. Update event data in `src/data/techfestData.ts` where applicable.
4. Run the build and type-check scripts.
5. Submit a pull request with a clear summary and screenshots for visual changes.

## Disclaimer

This project is a website concept/demo and is not necessarily affiliated with, endorsed by, or maintained by IIT Bombay or Techfest. Use official channels to verify festival information before relying on it.
