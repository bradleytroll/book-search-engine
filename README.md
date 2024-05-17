# Book Search Engine

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [How to Contribute](#how-to-contribute)
- [GitHub Repo](#github-repo)
- [Deployed Application](#deployed-application)

## Description
The Book Search Engine is a web application that allows users to search for books using the Google Books API, save books to their account, and view their saved books. The application is built using the MERN stack (MongoDB, Express.js, React, Node.js) and is refactored to use GraphQL with Apollo Server for querying and mutating data.

## Installation
To install and run this application locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-search-engine.git
    ```
2. Navigate to the project directory:
    ```bash
    cd book-search-engine
    ```
3. Install server dependencies: 
    ```bash
    npm install
    ```
4. Navigate to the 'client' directory and install client dependencies:
    ```bash
    cd client
    npm install
    ```
5. Build the client:
    ```bash
    npm run build
    ```
6. Navigate back to the root directory:
    ```bash
    cd ..
    ```
7. Start the Server:
    ```bash
    NODE_ENV=production npm start
    ```

## Usage

Once the server is running, open your browser and navigate to http://localhost:3001 to use the application. You can search for books, sign up for an account, save books to your account, and view your saved books.

## Dependencies 

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [React-Bootstrap](https://react-bootstrap.github.io/): Bootstrap components built with React.
- [Apollo Client](https://www.apollographql.com/docs/react/): A comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL.
- [GraphQL](https://graphql.org/): A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.
- [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- [Mongoose](https://mongoosejs.com/): A MongoDB object modeling tool designed to work in an asynchronous environment.
- [JWT-Decode](https://github.com/auth0/jwt-decode): A library that helps decode JSON Web Tokens (JWT) token.

## How to Contribute

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch with your feature or bugfix:
    ```bash
    git checkout -b your-feature-branch
    ```
3. Commit your changes:
    ```bash
    git checkout -b your-feature-branch
    ```
4. Push to the branch:
    ```bash
    git push origin your-feature-branch
    ```
5. Create a new pull request.

## GitHub Repo
You can find the GitHub repository for this project [here](https://github.com/bradleytroll/book-search-engine).

## Deployed Application
The deployed application can be accessed [here](https://your-deployed-application-link.com).
