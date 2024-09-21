import { useCallback, useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

function List({ text,isComplete,id }) {
const valueContext = useContext(ToDoContext);

const handleUpdate = useCallback(
  (id) => {
    valueContext.setToDoList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  },
  [valueContext] // Depend on `valueContext` since `setToDoList` comes from it
);


  const taksDelete = useCallback((id) =>{
    valueContext.setToDoList((prev)=> prev.filter((task)=> task.id !== id )
    )
  },[valueContext])


  return (
    <>
        <div className="w-full flex justify-between items-center gap-2">
          <label onClick={()=>handleUpdate(id)} className={`w-fit hover:bg-slate-100 flex-1 select-none p-2 rounded cursor-pointer truncate ${isComplete?"line-through text-slate-600":""} `}>
            {text}
          </label>
          <div className="cursor-pointer" onClick={()=>taksDelete(id)}>
            <svg
              className="fill-black hover:fill-orange-500"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e8eaed"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          </div>
        </div>
    </>
  );
}

export default List;
