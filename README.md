# To-Do List App


The **To-Do List App** is a simple and interactive application that allows users to create, manage, and track their tasks. Users can add tasks, mark them as complete or incomplete, and delete them when necessary. The app is built using **React** for the frontend and **Tailwind CSS** for styling. Additionally, it uses l**ocal storage** to persist tasks even after the page is refreshed.

## Features

- Add new tasks to your list.
- Mark tasks as complete or incomplete.
- Delete tasks from the list.
- Tasks persist even after refreshing the page (local storage).
- Responsive design using Tailwind CSS.

## Demo

You can view the live demo of this project [here](#) (Add a link if deployed).

## Installation

Follow these steps to set up the project locally on your machine:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/todo-list-app.git

2. **Navigate to the project directory**:
    ```bash
    cd todo-list-app

3. **Install the dependencies**:
    ```bash
    npm install

The app will now be running on http://localhost:3000.

## Technologies Used
- **React**: For building the user interface and managing state.
- **Tailwind CSS**: For styling the app and ensuring responsive design.
- **useContext**: For managing global state across components.
- **useRef**: For managing form input values.
- **Local Storage**: To persist the to-do list even after refreshing the browser.

## Usage
1. **Add Task**: Enter the task in the input field and click the "Add Task" button.
2. **Mark Task as Complete**: Click on a task to mark it as complete or incomplete. Completed tasks will be displayed with a line-through style.
3. **Delete Task**: Click the delete button next to the task to remove it from the list.

## Key Hooks & Concepts
1. **useState**: Used to manage the list of tasks.
2. **useRef**: Used for handling the task input.
3. **useContext**: Shared state between components (Homepage and List) using ToDoContext.
4. **useEffect**: To store the updated task list in local storage every time the list changes.

# Project Structure
The project follows a clean and organized folder structure:
```php
    ├── public
    │   └── index.html
    ├── src
    │   ├── components
    │   │   └── List.js        # Component for displaying  individual tasks
    │   ├── context
    │   │   └── ToDoContext.js # Context for managing to-do list state globally
    │   ├── pages
    │   │   └── Homepage.js    # Main page with input form and task list
    │   ├── App.js             # Root component wrapping the app in context provider
    │   ├── index.js           # Entry point for the React app
    │   └── styles
    │       └── index.css      # Tailwind CSS styles
    └── README.md              # Project documentation

