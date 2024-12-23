# React App with Redux Toolkit and Material-UI

This project is a React application built with TypeScript, Vite, and Material-UI. It includes state management using Redux Toolkit and a custom dialog system implemented with RxJS.

## Features

1. **React with TypeScript**: Ensures strong typing for better code quality.
2. **Redux Toolkit**: Simplifies state management for people and favorites.
3. **Material-UI**: Provides pre-styled components for a modern UI.
4. **RxJS**: Used for reactive event management in the custom dialog.
5. **Vite**: Fast and modern build tool with HMR (Hot Module Replacement).
6. **Custom Components**:
   - `Navbar`: Includes a login button and a favorites icon.
   - `CustomDialog`: Handles dynamic dialog visibility using RxJS.
   - `PeopleTable` and `FavoriteTable`: Display lists of people and favorites.

## Installation

### Prerequisites

Ensure you have the following installed:
- Node.js (version 16 or higher recommended)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/alfredoajalla/react-redux-app.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-app
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the application for production.
- **`npm run lint`**: Runs ESLint to check code quality.
- **`npm run preview`**: Previews the production build.

## Project Structure

```plaintext
src
├── components
│   ├── Navbar.tsx          # Navigation bar with favorites and login.
│   └── CustomDialog.tsx    # Custom dialog component using RxJS.
├── data
│   └── people.ts           # Mock data for people.
├── redux
│   ├── states.ts           # Redux slices for people and favorites.
│   └── store.ts            # Store configuration with reducers.
├── models
│   └── subjectmanager.ts   # RxJS Subject Manager for dialog control.
├── App.tsx                 # Main application component.
└── index.tsx               # Application entry point.
```

## Key Dependencies

### Production

- **React**: Core library for building the UI.
- **Redux Toolkit**: Simplified state management.
- **Material-UI**: Pre-styled components and icons.
- **RxJS**: Reactive programming library.

### Development

- **TypeScript**: Adds static typing to JavaScript.
- **Vite**: Fast development server and build tool.
- **ESLint**: For linting and code quality.
- **@types**: Type definitions for TypeScript.

## Usage

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the application in your browser at [http://localhost:3000](http://localhost:3000).

3. Use the navigation bar to interact with the app:
   - Click the favorites icon to view the `FavoriteTable` inside a dialog.
   - Add people to the state and manage favorites.

## CustomDialog

- `CustomDialog` uses RxJS subjects for controlling its visibility.
- Example usage:

  ```tsx
  import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';

  const handleOpenDialog = () => {
      dialogOpenSubject$.setSubject = true;
  };
  ```

## Contribution

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/your-feature-name`).
3. Commit your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

