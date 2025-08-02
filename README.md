# Khonthoklon Lab Web Application

Welcome to the **Khonthoklon Lab** web application, a research and innovation platform developed for the Computer Science & Engineering Department at NIT Manipur. This app showcases upcoming and past events focused on Speech and Language Technology, certificate verification, and detailed event insights.

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About

The Khonthoklon Lab web app provides:

- A home page with lab introduction and recent events preview.
- Full event listings with detailed views and schedules.
- Certificate verification via unique IDs with QR code support.
- Context-driven global state management for events.
- Well-structured React components following best practices.

This platform supports research dissemination and community engagement for Speech and Language Technology initiatives at NIT Manipur.

---

## Features

- **Events Overview**: View upcoming and past lab events with concise summaries.
- **Event Details**: Rich content for each event, including custom workshop schedules.
- **Certificate Verification**: Certificate lookup via encoded IDs.
- **Responsive UI**: Mobile and desktop optimized using Tailwind CSS.
- **Context State Management**: Global events state with loading and error handling.
- **Dynamic Routing**: Using React Router for smooth navigation.
- **Optimized Asset Handling**: Imported assets for caching and optimization.

---

## Tech Stack

- **Frontend**:
  - React (Functional components and hooks)
  - TypeScript for type-safe development
  - React Router DOM for routing
  - Tailwind CSS for utility-first styling
  - Vite as the build tool

- **State Management**:
  - React Context API for global event data and loading/error states

- **Utilities**:
  - Custom hooks (`useEvents`)
  - Utility functions for date formatting, sorting, encoding/decoding certificate IDs

---

## Project Structure

```bash
src/
├── assets/ # Static images and icons
├── components/ # Reusable React components (Header, Layout, Event components, etc.)
│ ├── Event/ # Event related components and content
│ └── ui/ # Smaller, common UI components (Toast, QR, etc.)
├── constants/ # API paths, routes constants and route builders
├── contexts/ # React Context and providers (EventsContext)
├── pages/ # Top-level route pages (Home, Events, Certificate, etc.)
│ ├── certificates/
│ └── events/
├── types/ # TypeScript type definitions (Event, CertificateData)
├── utils/ # Utility functions for date handling, certificate utils, event utils
├── App.tsx # Root app component with router setup
├── main.tsx # Entry point
```

This modular structure promotes scalability, maintainability, and reusability.

---

## Getting Started

### Prerequisites

- Node.js (>=16.x)
- npm or yarn package manager

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/khonthoklon/khonthoklon.github.io.git
    cd khonthoklon.github.io
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

4. Open the app in your browser at `http://localhost:5173` (default Vite port).

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## Available Scripts

- `dev`: Starts the development server with hot reload
- `build`: Creates a production build
- `preview`: Serves the production build locally for testing
- `lint`: Run linter on your source files (if configured)
- `test`: Run tests (if implemented)

---

## Contributing

To contribute, please:

- Fork the repo and create a new branch for your feature or fix.
- Submit pull requests with clear descriptions.
- Follow the existing code style and naming conventions.
- Report issues or request features via GitHub Issues.

To add upcoming event,

- Add information in `src/components/events/eventName/` and create `src/components/events/EventBody.tsx`
- Update the dictionary `extraEventComponents` in `src/pages/events/eventdetail.tsx`
- To add certificate details, add json file `public/events/eventName/participants.json` and add certificate images in `public/events/eventName/images/` if possible

---

## License

This project is licensed under the [MIT License](LICENSE) (or your chosen license).

---

## Contact

Khonthoklon Lab,
Department of Computer Science & Engineering,  
National Institute of Technology Manipur (NIT Manipur)

- Email: [khonthoklon@gmail.com](khonthoklon@gmail.com)
- Website: khonthoklon.github.io
- GitHub: github.com/khonthoklon

---

## Acknowledgments

- React and Tailwind CSS documentation and communities  
- Vite bundler  
- Open source contributors

---

*Thank you for visiting the Khonthoklon Lab project!*
