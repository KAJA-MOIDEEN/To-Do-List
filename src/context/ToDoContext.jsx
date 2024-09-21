import { createContext, useState } from "react"

export const ToDoContext = createContext();

const ToDoprovider = ({children})=> {
    const [toDoList,setToDoList] = useState([]);
    
    return (
    <ToDoContext.Provider value={{toDoList,setToDoList}}>
        {children}
    </ToDoContext.Provider>
  )
}

export default ToDoprovider