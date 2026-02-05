# KelasInovatif Landing Page

This is the new landing page for KelasInovatif, built with Next.js 15, Tailwind CSS, and PostgreSQL.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (App Router)
- **Database**: PostgreSQL
- **ORM / Query Builder**: [Knex.js](https://knexjs.org/)
- **Styling**: Tailwind CSS
- **Package Manager**: [Bun](https://bun.sh)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Bun](https://bun.sh) (v1.0 or higher)
- [PostgreSQL](https://www.postgresql.org/)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd kelasinovatif-new-landingpage
```

### 2. Install dependencies

```bash
bun install
```

### 3. Environment Setup

Create a `.env` file in the root directory by copying the example:

```bash
cp .env.example .env
```

Open `.env` and fill in your database credentials:

```env
DATABASE_URL=postgres://user:password@localhost:5432/kelasinovatif_db
```

Make sure not to forget to create the database in your PostgreSQL instance if it doesn't exist yet.

### 4. Database Setup

This project uses Knex.js for migrations.

#### Restore Database (Recommended)
If you have a database backup file (e.g., `backup_kelasinovatif.sql`), restore it using your PostgreSQL tool (e.g., psql, pgAdmin).

Example using psql:
```bash
psql -h localhost -U your_username -d kelasinovatif_db -f backup_kelasinovatif.sql
```

#### Run Migrations (Alternative)
If you are starting from scratch without a backup:

```bash
bun x knex migrate:latest
```

### 5. Run the Application

Start the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app`: Next.js App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and database configuration (`db.ts`).
- `migrations`: Knex database migrations.
- `scripts`: Utility scripts for data import/export and maintenance.

## Scripts

- `bun dev`: Runs the development server.
- `bun build`: Builds the application for production.
- `bun start`: Starts the production server.
- `bun lint`: Runs ESLint.
- `bun lint`: Runs ESLint.
