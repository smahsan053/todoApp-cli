import chalk from "chalk"; // Import Chalk for colorful output
import todo from "./todomethods.js";

// Define interface for update item questions
interface UpdateItemQuestion {
    message: string;
    type: string;
    name: string;
    choices: (string | { name: string; disabled: string })[]; // Allow strings as well
}

// Define list of tasks
const taskList = [
    {
        message: "Select a Task", // Updated message for more impressive sentence
        type: "list",
        name: "optionslist",
        choices: [
            "Add Item", "Update Item", "View Item", "Delete Item", "Exit" // Updated choices for impressive sentences
        ]
    }
];

// Define questions for adding an item
const addItemQuestions = [
    {
        message: "Please input the item to add to your todo list", // Updated message for more impressive sentence
        type: "input",
        name: "item",
    }
];

// Define questions for adding more items
const addMoreItemQuestions = [
    {
        message: "Do you want to add more items to your todo list?", // Updated message for more impressive sentence
        type: "list",
        name: "moreitem",
        choices: ["Yes", "No"]
    }
];

// Function to initialize update item questions
function initializeUpdateItemQuestions(): UpdateItemQuestion[] {
    const todolist = todo.instance; // Assuming todo.instance is the instance of the todo class

    const updateItemLists: UpdateItemQuestion[] = [
        {
            message: "Please select a task to update", // Updated message for more impressive sentence
            type: "list",
            name: "updatetask",
            choices: todolist.list.length > 0 ?
                todolist.list :
                [{ name: "No tasks available in your todo list. Please update default tasks below to add into your todo list.", disabled: "***" }, "Coding", "Gaming"]

        }
    ];
    return updateItemLists;
}

// Define questions for updating an item
const updateItemQuestions = [
    {
        message: "Please enter the updated task", // Updated message for more impressive sentence
        type: "input",
        name: "updatetask",
    }
];

// Function to initialize delete item questions
function initializeDeleteItemQuestions(): UpdateItemQuestion[] {
    const todolist = todo.instance; // Assuming todo.instance is the instance of the todo class

    const deleteItemLists: UpdateItemQuestion[] = [
        {
            message: "Please select a task to delete", // Updated message for more impressive sentence
            type: "list",
            name: "deletetask",
            choices: todolist.list.length > 0 ? todolist.list : [{ name: 'No item in your todo list to delete', disabled: "***" }]
        }
    ];
    return deleteItemLists;
}

// Export the defined elements
export {
    taskList,
    addItemQuestions,
    addMoreItemQuestions,
    initializeUpdateItemQuestions,
    updateItemQuestions,
    initializeDeleteItemQuestions
};
