## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/hafid24/sag.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd sag
   ```

3. **Install dependencies for the client:**

   ```bash
   cd client
   npm install
   or
   yarn
   ```

4. **Start the client development server:**

   ```bash
   npm run dev
   or
   yarn dev
   ```

5. **Install dependencies for the server:**

   ```bash
   cd ../server
   npm install
   or
   yarn
   ```

6. **Start the server:**

   ```bash
   npm start
   or
   yarn start
   ```

## Project Structure

- **client/**: Contains the React frontend application.
- **server/**: Contains the Express backend server.
- **client/src/components/**: Contains React components organized in an atomic design structure.
- **server/src/**: Contains server-side logic, including routes and utility functions.

## Available Scripts

In the client directory, you can run:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the app for production.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Lints the codebase using ESLint.

In the server directory, you can run:

- **`npm start`**: Starts the server.
- **`npm test`**: Runs the tests using Jest.
- **`npm run watch`**: Starts the server with nodemon for live-reloading.

## Contributing

If you would like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
