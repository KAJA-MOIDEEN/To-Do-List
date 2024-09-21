import { useCallback, useContext, useEffect, useRef } from "react";
import List from "../components/list";
import { ToDoContext } from "../context/ToDoContext";

function Homepage() {

  const valueContext = useContext(ToDoContext);
  
  const inputRef = useRef();

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const savedToDoList = localStorage.getItem("toDoList");
    if (savedToDoList) {
      valueContext.setToDoList(JSON.parse(savedToDoList));
    }
  }, []);

  // Save toDoList to localStorage whenever it updates
  useEffect(() => {
    if (valueContext.toDoList.length >= 0) {
      localStorage.setItem('toDoList', JSON.stringify(valueContext.toDoList));
    }
    setTimeout(()=>{ 
      valueContext.setLoading(false); 
    },150*10)
    // Stop loader after fetching data
  }, [valueContext]);

  // Add task to the list
  const addTask = useCallback(() => {
    const inputData = inputRef.current.value.trim();

    if (inputData === "") {
      return;
    }

    const newToDo = {
      id: Date.now(), // Generate a unique ID based on the timestamp
      text: inputData,
      isComplete: false, // Task is initially incomplete
    };

    valueContext.setToDoList((prev) => [...prev, newToDo]);

    // Clear the input field after adding the task
    inputRef.current.value = "";
    inputRef.current.focus();
  }, [valueContext]);

  // Handle Enter key press to add task
const handleKeyDown = useCallback((e)=>{
  if (e.keyCode === 13){ // Check if "Enter" key is pressed
    addTask();
  }
},[addTask]);

if (valueContext.loading) {
  // Show loader while fetching data
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="gaming-loader"></div> {/* Your custom loader component or animation */}
    </div>
  );
}
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center px-[25%] min-h-[100vh]">
        <div className="w-full p-[5%] bg-custom-gradient rounded-3xl">
          <div className="w-full flex flex-col">
            <div className="border-b w-full mb-2">
              <h2 className="text-orange-500 text-2xl hover:text-white hover:border-b-orange-600 animate-bounce font-bold">
                To-Do List
              </h2>
            </div>
            <div className="w-full flex gap-2">
              <input
                className="h-9 w-9/12 pl-2 outline-none hover:border-b-2 border-orange-500 rounded"
                type="text"
                name="text"
                placeholder="Add Your Task"
                ref={inputRef}
                onKeyDown={handleKeyDown} // add onKeyDown Function
              />
              <button
                className="h-9 w-1/4 bg-orange-500 hover:bg-orange-300 font-medium rounded-md"
                onClick={addTask} 
              >
                Add Task
              </button>
            </div>
            <div className="py-2 text-white">
              <p>Fill Task Details</p>
            </div>
            <div className="w-full flex flex-col justify-between bg-white h-auto py-5 px-2 rounded-md">
              <legend className="text-pink-500 font-bold">List Of Tasks</legend>

              {/* List Item Start */}
              {valueContext.toDoList?.length === 0 ? (
                <p>Start by adding your first task.</p>
              ) : (
                valueContext.toDoList.map((todo) => (
                  <List
                    text={todo.text}
                    key={todo.id}
                    isComplete={todo.isComplete}
                    id={todo.id}
                  />
                ))
              )}
              {/* List Item End */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
