import { createContext, useState } from "react"

export const ToDoContext = createContext();

const ToDoprovider = ({children})=> {
    const [toDoList,setToDoList] = useState([]);
    const [loading, setLoading] = useState(true); 
    
    return (
    <ToDoContext.Provider value={{toDoList,setToDoList,loading, setLoading}}>
        {children}
    </ToDoContext.Provider>
  )
}

export default ToDoprovider