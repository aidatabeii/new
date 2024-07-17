//contact list
import TodoItem from "./TodoItem";
function Todos({todos, deleteHandler}) {
    return(
<div > 
    <h3 class="text-2xl"> List of information </h3>
    {todos.length ?
     (   <ul class="border-2 border-slate-700 list-none mt-5 p-1" >
        {todos.map((contact)=>(
           <TodoItem key={contact.id} data={contact} deleteHandler={deleteHandler} />
        ))}
    </ul>):(<p class="text-xl"> You have not entered anything!!! 🙄</p>)}
</div>
    );
};
export default Todos;