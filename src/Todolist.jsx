import React, {useState} from 'react'
function Todolist(){
    const [tasks, setTasks]=useState([]);
    const [newtask, setnewtask]=useState("");
    function handleip(event){
        setnewtask(event.target.value);
    }
    function addtask(){
        if(newtask.trim()!==""){setTasks(t=>[...t,newtask]);
        setnewtask("");}
    }
    function deletetask(index){
        const updatedtask=tasks.filter((_,i)=>i!==index);
        setTasks(updatedtask);
    }
    function moveup(index){
        if(index>0){
            const updatedtask=[...tasks];
            [updatedtask[index],updatedtask[index-1]]=[updatedtask[index-1], updatedtask[index]];
            setTasks(updatedtask);
        }
    }
    function movedown(index){
        if(index<tasks.length){
            const updatedtask=[...tasks];
            [updatedtask[index],updatedtask[index+1]]=[updatedtask[index+1], updatedtask[index]];
            setTasks(updatedtask);
        }
    }
    return(<div className='to-do-list'>
        <h1>To-do-list</h1>
        <div>
            <input type="text" placeholder='Enter a task' value={newtask} onChange={handleip}/>
            <button className='add-butt' onClick={addtask}>Add</button>
        </div>
        <ol>
            {tasks.map((task,index)=><li key={index}><span className='text'>{task}</span><button
             className='Del-butt' onClick={()=>deletetask(index)}> Delete</button><button
             className='move-butt' onClick={()=>moveup(index)}>👆 </button><button
             className='move-butt' onClick={()=>movedown(index)}>👇 </button></li>)}
        </ol>
    </div>)

}
export default Todolist