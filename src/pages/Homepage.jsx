import { useContext, useEffect, useRef } from "react";
import List from "../components/list";
import { ToDoContext } from "../context/ToDoContext";

function Homepage() {
  
  const valueContext = useContext(ToDoContext)

  console.log(valueContext);
  
  const inputRef = useRef();

  
  // fetch data from localStorage
  useEffect(()=>{ 
    const saveToDOList = localStorage.getItem("toDoList");
    if (saveToDOList) {
      valueContext.setToDoList(JSON.parse(saveToDOList));
    }
  },[])

  useEffect(() => {
    // Example for saving to local storage
    if (valueContext.toDoList.length > 0 ) {
      localStorage.setItem('toDoList', JSON.stringify(valueContext.toDoList))  
    }
  }, [valueContext.toDoList]); // Optional: to persist data on state change

  const addTask = () => {
    const inputData = inputRef.current.value.trim();

    if (inputData === "") {
      return;
    }

    const newToDo = {
      id: Date.now(), // Call Date.now to generate a timestamp
      text: inputData,
      isComplete: false, // Fixed typo (if intentional, you can keep it as is)
    };

    valueContext.setToDoList((prev) => [...prev, newToDo]); // Correctly updating the state

    inputRef.current.value = ""; // Clear input field after adding task
  };

  
  
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
                <p>List Not Found</p>
              ) : (
                valueContext.toDoList?.map((todo) => (
                  <List
                    text={todo.text}
                    key={todo.id}
                    isComplete={todo.isComplete}
                    id={todo.id}
                  />
                ))
              )}
           
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
