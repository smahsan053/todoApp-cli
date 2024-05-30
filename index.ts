#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import todo from "./todomethods.js";
import { taskList } from "./questions.js";

const todolist = todo.instance;

export default function initApp() {
    inquirer.prompt(taskList).then(answers => {
        switch (answers.optionslist) {
            case "Add Item":
                console.log(chalk.yellow("Adding a new item to your todo list..."));
                todolist.addItem();
                break;
            case "Update Item":
                console.log(chalk.yellow("Updating an item in your todo list..."));
                todolist.updateItem();
                break;
            case "View Item":
                console.log(chalk.yellow("Viewing items in your todo list..."));
                todolist.viewItem();
                break;
            case "Delete Item":
                console.log(chalk.yellow("Deleting an item from your todo list..."));
                todolist.deleteItem();
                break;
            case "Exit":
                console.log(chalk.yellow("Exiting the application..."));
                break;
        }
    });
}

initApp();
