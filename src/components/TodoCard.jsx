import { useTodo } from '../hook';
import styles from '../styles/todoCard.module.css'
const TodoCard=()=> {
const {task,remove,toggle}=useTodo();

return (
      <div className="TodoCard">
        <ul className={styles.list}>
   {task.length>0&&task.map((todo,i)=>(
<li key={i}>
          <input type="checkbox" id={todo.id} checked={todo.completed}  onChange={()=>toggle(todo.id)}/>
                        <label htmlFor={todo.id}>
                          <span>
                          {todo.title}
                          </span>
                          </label>
                        <img
                          src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUT1lqkTR6p9Azkhx6o7UcsP6dKC3qoEDDGpHJolG2e3cICQDERF70RX2vLuLhTIx7gPk&usqp=CAU"
                          className={styles.delete}
                          alt=''
                        onClick={()=> remove(todo.id) }
                        />      
                          </li>
                          ))}        
                      </ul>
      </div>
    );
}

export default TodoCard;
