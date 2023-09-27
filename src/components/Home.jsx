import styles from '../styles/home.module.css'
import TodoCard from "./TodoCard";
import { useTodo } from '../hook';
import { useEffect, useRef } from 'react';
const Home=()=> {;
  const {reset,add,task}=useTodo(); 

  const inputRef=useRef(null);
  useEffect(()=>{
  inputRef.current.focus();
  })
const handlechange=(e)=>{
 if (e.key === "Enter") {
     const tk=e.target.value;
      add(tk);
      e.target.value="";
  };
}

  return (
    <div className={styles.home} style={{    width: "50%", margin: '0 auto'}}>
        <h1>Todo list</h1>
               <input
        placeholder="Add a task"
        className={styles.addtask}
        
        ref={inputRef}
        onKeyUp={(e)=>{handlechange(e)}}
      />      
      <button onClick={()=>reset()}>Reset</button>
      <span className={styles.totaltasks}>Total task : 
        <span id="tasks-counter"> {task.length}</span>
      </span>
     <TodoCard/>
     </div>
  );
}

export default Home;
