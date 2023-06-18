# podcast-app

A small app for listening to music podcasts.

## Table of Contents

- [Introduction](#introduction)
- [Environment Variables and Dev/Prod Settings](#environment-variables-and-devprod-settings)
- [Dev/Prod Configurations with Vite](#devprod-configurations-with-vite)
- [Dependencies](#dependencies)

## Introduction

This is a small app for listening to music podcasts.

## Environment Variables and Dev/Prod Settings

This application uses environment variables and settings specific to the development (dev) and production (prod) environments.

### Environmental Variables

The following environment variables are used to configure the application:

- `VITE_API_URL`: This variable must contain the base URL of the API to be used in the application.

**Note**: Make sure to start each variable with VITE (VITE_APP_URL). [VITE](https://vitejs.dev/guide/env-and-mode.html).

### Dev/Prod configurations with Vite

This application uses Vite for the development and production environment:

#### Development (Dev)

In the development environment, the application runs on a local server. The main features of this environment are:

- Asset files (JavaScript, CSS, images, etc.) are served without minimizing, which facilitates debugging and rapid development.
- The application is automatically reloaded when changes are made to the source code.

To run the application in the development environment, follow these steps:

1. Open a terminal in the project root folder.
2. Execute the following command:

   ```bash
   npm run dev
   ```

3. the application will be available at [http://localhost:3000](http://localhost:3000).

#### Production (Prod)

In the production environment, the application is optimized for better performance and is served from concatenated and minimized files. The main features of this environment are:

- Assets files are optimized and minimized to improve application performance.
- The application is executed from the compiled and optimized files.

To generate the production version of the application, follow these steps:

1. Open a terminal in the project root folder.
2. Execute the following command:

   ```bash
   npm run build
   ```

3. Once the build process is complete, optimized files will be generated in the `dist` folder.
4. To serve the application, you can use any static web server, such as [Serve](https://www.npmjs.com/package/serve) o [Netlify](https://www.netlify.com/).

## Dependencies

- **React Router DOM**: A library that provides navigation routing for React applications. It is used in this project to define and manage application routes and views in a declarative way.

  Example:

  ```javascript
  import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    );
  }
  ```

  Documentation: [React Router DOM](https://reactrouter.com/web/guides/quick-start)

- **Redux**: A state management library used to centralize and control data in the application. It enables predictable data flow and facilitates communication between components.

  Example:

  ```javascript
  // Define an initial status and actions
  const initialState = {
    counter: 0,
  };

  const increment = () => ({ type: "INCREMENT" });

  // Create a reducer
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state, counter: state.counter + 1 };
      default:
        return state;
    }
  };

  // Create a store and configure Redux in the application
  import { createStore } from "redux";

  const store = createStore(reducer);
  ```

  Documentation: [Redux](https://redux.js.org/)

- **Jest**: A unit testing framework for JavaScript. It is used in this project to write and run automated tests to ensure the correct functioning of components and functions.

  Example:

  ```javascript
  // Unit test of a function
  function sum(a, b) {
    return a + b;
  }

  test("sum adds two numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });
  ```

  Documentation: [Jest](https://jestjs.io/)

- **React Testing Library**: A test library that provides tools and utilities for testing React components. It is used in this project to write integration tests and check the behavior of components in different situations.

  Example:

  ```javascript
  import { render, screen } from "@testing-library/react";
  import App from "./App";

  test("renders the app component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Hello, World!/i);
    expect(linkElement).toBeInTheDocument();
  });
  ```

  Documentation: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

- **Bootstrap**: A popular CSS framework that provides predefined styles and ready-to-use components. It is used in this project to style the user interface.

  Example:

  ```html
  <button class="btn btn-primary">Click me</button>
  ```

  Documentación: [Bootstrap](https://getbootstrap.com/)

- **ESLint**: A linting tool that helps to detect and correct style errors and unwanted practices in the code. It is used in this project to maintain clean and consistent code.

  Documentation: [ESLint](https://eslint.org/)

- **Prettier**: A code formatter that helps to maintain consistent code structure and style. It is used in this project to automatically format code according to the configured style rules.

  Documentation: [Prettier](https://prettier.io/)
