# **[Issue Tracker App](https://eb-issue-tracker-app.onrender.com)**

The Issue Tracker App is a powerful tool for managing and tracking issues within your projects. It provides a user-friendly interface for creating, updating, and deleting issues. This README.md provides an overview of the project's file structure, how to get started, and usage instructions.

## Table of Contents

- [Features](#features)
- [File Structure](#file-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Project Management**: Easily manage and track issues and tasks in your projects.
- **Create Issues**: Create new issues with titles, descriptions, and assignment options..
- **Update Issues**: Modify issue details, including titles, descriptions, and assignment status.
- **Delete Issues**: Remove issues that are no longer relevant to your project.
- **Filtering**: View issues based on filters such as open or closed status, creator, and more.

## File Structure
The application's file structure includes the following **key** files and directories:

- ```config/dbConn.js```: Module for handling the connection to a MongoDB database.
- ```controllers/```: Controllers for handling API requests.
- ```middlewares/logger.js```: Function responsible for logging incoming HTTP requests.
- ```models/```: Database models.
- ```routes/```: Defines the API routes for handling HTTP requests related to issues and projects.
- ```tests/functional_tests.js```: Contains a series of functional tests that were written using the [**Mocha**](https://mochajs.org/) testing framework and the [**Chai**](https://www.chaijs.com/) assertion library
- ```server.js```: Main entry point of the application. It is responsible for setting up and configuring the [**Express.js**](https://expressjs.com/) server, defining routes, and starting the server.

## Installation
To run the [Issue Tracker App](https://eb-issue-tracker-app.onrender.com) locally, follow these steps:
1. Clone this repository to your local machine using:
    ```bash
    git clone https://github.com/erickfb5/issue-tracker-app.git
2. Navigate to the project directory:
   ```bash
   cd issue-tracker-app
3. Install the required dependencies:
   ```bash
   npm install
4. Rename the `sample.env` file to `.env` and update the required environment variables.   
5. Start the server:
   ```bash
   npm start
## Usage
Once the server is running, you can use the [Issue Tracker App](https://eb-issue-tracker-app.onrender.com) by opening your web browser and navigating to http://localhost:3500.

## Technologies Used
The [Issue Tracker App](https://eb-issue-tracker-app.onrender.com) utilizes the technologies and dependencies listed below to deliver its functionality:

- [Node.js](https://nodejs.org/en/about)
- [Express.js](https://expressjs.com)
- [Mongoose](https://mongoosejs.com/)
- [Chai](https://www.chaijs.com/)
- [Date-fns](https://date-fns.org)

## Testing
The application includes a comprehensive testing suite with _functional_ tests:

 These tests check the overall functionality of the API by making HTTP requests to various endpoints and verifying the responses. The functional tests are defined in ```tests/functional-tests.js```.

To run the tests, you can use the following command: **```npm test```**

## Contributing
If you would like to contribute to this project, please follow these guidelines:

- Fork the repository on GitHub.
- Make your changes and commit them to your fork.
- Create a pull request from your fork to this repository. 

# License
This project is licensed under the **[MIT License](https://spdx.org/licenses/MIT.html)**.