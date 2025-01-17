# Pet Landing Page

A modern landing page built with React, TypeScript, and Vite.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- i18next for internationalization
- Docker

## Prerequisites

- Node.js 20 or higher
- npm
- Docker (optional)

## Local Development

1. Install dependencies:
```bash
npm ci
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5473`

## Docker Setup

1. Build the Docker image:
```bash
docker build -t pet-landing-bolt .
```

2. Run the container:
```bash
docker run -p 5473:5473 pet-landing-bolt
```

The application will be available at `http://localhost:5473`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run vite` - Start Vite server

## Project Structure

```
pet-landing-bolt/
├── src/            # Source files
├── public/         # Static assets
├── .bolt/          # Bolt configuration
├── Dockerfile      # Docker configuration
├── package.json    # Project dependencies and scripts
└── vite.config.ts  # Vite configuration
```
