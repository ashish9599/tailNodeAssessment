import { createContext } from "react";
import { useProvider } from "./hook";
const intialState={
task:[],
add:()=>{},
remove:()=>{},
toggle:()=>{},
reset:()=>{},
}
export const TodoContext=createContext(intialState);
export const TodoProvider=({children})=>{
    const todo=useProvider();
   return <TodoContext.Provider value={todo}>
    {children}
</TodoContext.Provider>
}