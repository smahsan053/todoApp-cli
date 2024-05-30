# Todo List Application

This is a simple command-line Todo List application built using Node.js. It allows you to add, update, view, and delete items from your todo list. The application uses `inquirer` for interactive prompts and `chalk` for colorful console messages.

## Features

- **Add Item**: Add a new item to your todo list.
- **Update Item**: Update an existing item in your todo list.
- **View Item**: View all items in your todo list.
- **Delete Item**: Delete an item from your todo list.
- **Exit**: Exit the application.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) package manager

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/todo-list-app.git
    cd todo-list-app
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Make the script executable:
    ```sh
    chmod +x ./index.js
    ```

## Usage

To run the application, use the following command:
```sh
./index.js

You will be prompted with a menu to choose an option for managing your todo list.

File Structure
index.js: The main entry point of the application.
todomethods.js: Contains methods for adding, updating, viewing, and deleting todo items.
questions.js: Contains the questions for the inquirer prompts.

chalk: Used for colorful console output.
inquirer: Used for interactive command-line prompts.
todomethods.js: Contains the logic for todo list operations.
questions.js: Defines the questions for the inquirer prompt.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. We welcome all contributions!

