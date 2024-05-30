import chalk from "chalk"; // Import Chalk for colorful output
import inquirer from "inquirer"; // Import Inquirer for user prompts
import initApp from "./index.js"; // Import initApp function
import { addItemQuestions, addMoreItemQuestions, initializeUpdateItemQuestions, updateItemQuestions, initializeDeleteItemQuestions } from "./questions.js";
// Define todo class implementing TodoMethods interface
export default class Todo {
    list;
    static instance = new Todo(); // Static instance of Todo class
    constructor(list = []) {
        this.list = list;
    }
    // Method to add an item to the todo list
    addItem() {
        inquirer.prompt(addItemQuestions).then((answers) => {
            if (answers.item === "") {
                console.log(chalk.red("Empty items cannot be added to todo")); // Colored output for error message
                this.addItem();
            }
            else {
                this.list.push(answers.item);
                inquirer.prompt(addMoreItemQuestions).then((answers) => {
                    if (answers.moreitem === "Yes") {
                        this.addItem();
                    }
                    else {
                        console.log(chalk.green("Task added successfully:")); // Colored output for successful addition
                        console.log(this.list);
                        initApp();
                    }
                });
            }
        });
    }
    // Method to update an item in the todo list
    updateItem() {
        const updateItemLists = initializeUpdateItemQuestions();
        inquirer.prompt(updateItemLists).then((answers) => {
            if (this.list.includes(answers.updatetask)) {
                const index = this.list.findIndex((element) => element === answers.updatetask);
                inquirer.prompt(updateItemQuestions).then((answers) => {
                    if (answers.updatetask === "") {
                        console.log(chalk.red("Tasks cannot be updated to empty item")); // Colored output for error message
                        this.updateItem();
                    }
                    else {
                        this.list[index] = answers.updatetask;
                        console.log(chalk.green("Task updated successfully:")); // Colored output for successful update
                        console.log(this.list);
                        initApp();
                    }
                });
            }
            else {
                inquirer.prompt([
                    {
                        message: `Update default task`,
                        type: "input",
                        name: "codingtask",
                        default: answers.updatetask === "Coding" ? "Coding" : "Gaming",
                    },
                ]).then((answers) => {
                    this.list.push(answers.codingtask);
                    console.log(chalk.green("Task added successfully:")); // Colored output for successful update
                    console.log(this.list);
                    initApp();
                });
            }
        });
    }
    // Method to view items in the todo list
    viewItem() {
        if (this.list.length > 0) {
            console.log(chalk.yellow(`Tasks in your todo list:`)); // Colored output for information
            this.list.forEach((e) => {
                console.log(chalk.cyan(` - ${e}`)); // Colored output for each task
            });
        }
        else {
            console.log(chalk.yellow(`No task in your todolist to view`)); // Colored output for information
        }
    }
    // Method to delete an item from the todo list
    deleteItem() {
        const deleteItemLists = initializeDeleteItemQuestions();
        inquirer.prompt(deleteItemLists).then((answers) => {
            const index = this.list.findIndex((element) => element === answers.deletetask);
            this.list.splice(index, 1);
            console.log(chalk.red("Task deleted successfully:")); // Colored output for successful deletion
            console.log(this.list);
        });
    }
}
