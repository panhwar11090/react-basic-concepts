import {useState} from 'react'

const Todo = () => {

    const[arr, setArr]= useState([]);
    const[task, setTask]= useState('');
    const [isEdit, setEdit] = useState(false);
    const [updateIndex, setIndex] = useState(null)

    const AddTodo = () =>{
        if(!task?.length){
            console.log("plese enter some todo")
        }else{
            arr.push(task);
            setArr([...arr]);
            setTask('')
        }       
    }

    const EditTodo = (index)=>{
        setTask(arr[index]);
        setEdit(true);
        setIndex(index)
    }

    const DeleteTodo = (index) =>{
        arr.splice(index,1)
        setArr([...arr]);
    }
    const updateTask = () => {
        arr[updateIndex] = task

        setTask('')
        setEdit(false)
        setIndex(null)
        setArr([...arr])
    }

    const cancelUpdate=()=>{
        setTask('');
        setEdit(false)
    }

  return (
    <div>
      <h1>Todo App</h1>
      <div>
        <input name='task' placeholder='add todo' onChange={e => setTask(e?.target?.value)} value={task}/>
        {!isEdit ? <button onClick={AddTodo}>Add Task</button>: <span>
            <button onClick={updateTask}>Update</button>
            <button onClick={cancelUpdate}>Cancel</button>
        </span>}
      </div>
      
           <ol>
            {arr?.map((v,i)=>{
                    return <li key={i}>
                        <span>{v}</span>
                        &nbsp;              
                        <button onClick={() => EditTodo(i)}>Edit</button>
                        &nbsp;
                        <button onClick={()=>DeleteTodo(i)}>Delete</button>
                        <br/>
                        <br/>
                    </li>
                })}
           </ol>
        
    </div>
  )
}

export default Todo
