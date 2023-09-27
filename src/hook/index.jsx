import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../todoContext";
import { toast } from "react-toastify";

export const useTodo=()=>{
    return useContext(TodoContext);
 }
 

export const useProvider=()=>{
const [task ,setTask]=useState([]);
useEffect(()=>{

const fetching=async()=>{
    const response= await fetch("https://jsonplaceholder.typicode.com/todos")
    const data= await response.json();   
   const todot=data.slice(0,10);
   const newTask=sorttask(todot);
   setTask(newTask);
}
fetching()
},[])
const sorttask=(taskd)=>{
    let start=0;
    let end=taskd.length-1;
    
    while(start<end){
    if(taskd[start].completed===true){
        if(taskd[end].completed===false){
            let temp=taskd[start];
            taskd[start]=taskd[end];
            taskd[end]=temp;
        }
        end--;
    }else{
        start++;
    }
    }
    return taskd
}




const add=async(text)=>{
    try {
    const tsk = {
        title:text,
        id: Date.now(),
        completed: false
    };
    const newTask=[tsk,...task]
    setTask(newTask);
      toast.success("Successfully added")
      
      
    if (tsk) {
      const res=await  fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(tsk)
        })
          const data= await res.json()
      console.log(data);
        }
        } catch (error) {
        toast.error(error)
        }
}       

const remove=(id)=>{
  const newtask=task.filter((todo)=>todo.id!==id)
  toast.success("Deleted successfully")
  setTask(newtask);
}
const toggle=(id)=>{
    let checked=false;
    const newtask=task.map((todo)=>{
        if(todo.id===id){
            todo.completed=!todo.completed
        checked=todo.completed
        }
        return todo
    })
    if(checked){
        
        toast.success("Completed  successfully")
    }else{
        toast.info("Complete Your work ")

    }
    const sortN= sorttask(newtask);
    setTask(sortN);
}
const reset=()=>{
    setTask([]);
}

    return {
       task:task,
        add,remove,toggle,
       reset
    }
}