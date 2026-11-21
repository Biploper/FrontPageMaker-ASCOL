# Amrit Campus Front Page Maker

A simple web-based academic front page generator for students of **Amrit Science Campus, Tribhuvan University**.

Create professional front pages for lab reports, project reports, and academic assignments by entering your project details and student information. Preview the generated page and print it in A4 format.

## Features

- **Dynamic Front Page Generation** – Generate academic front pages using customizable project and academic details.
- **Student Information** – Add multiple group members with their names and symbol numbers.
- **Academic Details** – Enter project title, subject, course name, semester, section, and faculty name.
- **Live Preview** – Preview the generated front page before printing.
- **A4 Print Support** – Generate print-ready front pages with proper A4 dimensions and layout.
- **Local Storage** – Automatically save submitted form data in the browser's local storage.

## Tech Stack

- **React** – Frontend library
- **Vite** – Development server and build tool
- **Tailwind CSS** – Styling
- **React Toastify** – Form validation notifications
- **Local Storage API** – Client-side data persistence

## Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Biploper/FrontPageMaker-ASCOL.git
   ```

2. Navigate to the project directory:

   ```bash
   cd FrontPageMaker-ASCOL
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL provided by Vite in your browser.

## Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

The production files will be generated inside the `dist/` directory.

## Deployment

The application can be deployed using [Netlify](https://www.netlify.com/).

Connect the GitHub repository to Netlify and configure:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Publish directory | `dist` |

Netlify will automatically build and deploy the application whenever changes are pushed to the connected GitHub repository.

## Project Structure

```text
.
├── public/
│   ├── _redirects
│   └── logo.png
├── src/
│   ├── assets/
│   ├── Components/
│   ├── Pages/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Data & Privacy

The application uses browser local storage to temporarily persist front page form data.

- No account registration is required.
- No backend database is required.
- Form data stays in the user's browser.
- Clearing browser storage may remove previously saved form data.

## License

This project is open-source. You are welcome to explore, modify, and adapt it for educational purposes.
