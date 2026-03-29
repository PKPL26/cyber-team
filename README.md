# Cyber Team Project

This repository contains both a frontend (`fe`) built with Next.js and a backend (`be`) built with NestJS. Follow the instructions below to set up and run the project on a new computer.

## Requirements
- **Node.js**: (v18 or v20+ recommended)
- **npm**: (comes with Node.js)

## Getting Started

### 1. Clone the repository
First, clone the project from your version control system onto your machine:
```bash
git clone <repository-url> cyber-team
cd cyber-team
```

### 2. Backend Setup (NestJS)
The backend is located in the `be` directory.

1. Navigate to the backend directory:
   ```bash
   cd be
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server (runs in watch mode by default at an available port, typically 3000):
   ```bash
   npm run start:dev
   ```

> **Note**: If you encounter errors like `Cannot find module '@nestjs/mapped-types' or its corresponding type declarations.` when running the backend, run `npm install @nestjs/mapped-types` inside the `be` folder.

### 3. Frontend Setup (Next.js)
The frontend is located in the `fe` directory.

1. Open a new terminal instance and navigate to the frontend directory:
   ```bash
   cd fe
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
The frontend should now be running, typically at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is occupied by the backend).

## Development Notes
- The Next.js frontend uses React 19 and Tailwind CSS v4.
- The NestJS backend uses version 11 of the framework.
