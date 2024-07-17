import { useState } from "react";
import { useSelector} from "react-redux";
import Todos from "./Todos";
import { v4 } from "uuid";
function TodoList(){
    const store= useSelector((store)=>(store.todo.todoValue));
    const [todos,setTodos]=useState([]);
    const [alert,setAlert]=useState("");
    const [contact,setContact]=useState({
        id:"",
        name:"",
        lastName:"",
        email:"",
        phone:"",
    });
    const changeHandler=(event)=>{
        const name= event.target.name;
        const value= event.target.value;
        setContact( (contact)=>({...contact , [name]:value}));
    };
    const addHandler=()=>{
        if(!contact.name || !contact.lastName || !contact.email || !contact.phone){
            setAlert("Please enter your information dear💚");
            return;
        };
            setAlert("");
            const newContact = {...contact , id:v4()};
        setTodos(todos=>([...todos,newContact]))
        setContact(
            { name:"",
                lastName:"",
                email:"",
               phone:"",});
            };
            const deleteHandler= id =>{
                const newTodos = todos.filter((contact) => contact.id !== id);
                setTodos(newTodos);
            }
    return(
         <div class="flex flex-col items-center" >
        <div class="flex flex-wrap items-center justify-center p-5 mb-5 rounded-lg" >
            <input  class="w-1/2 h-10 p-2 m-2 border-2"
             type="text" placeholder="Name" name="name" value={contact.name } onChange={changeHandler}/>
            <input  class="w-1/2 h-10 p-2 m-2 border-2"
             type="text" placeholder="Last-name" name="lastName"  value={contact.lastName }onChange={changeHandler}/>
            <input class="w-1/2 h-10 p-2 m-2 border-2"
             type="email" placeholder="Enter your email" name="email" value={contact.email }onChange={changeHandler} />
            <input  class="w-1/2 h-10 p-2 m-2 border-2"
            type="number" placeholder="Phone" name="phone" value={contact.phone }onChange={changeHandler} />
            <button class="w-4/5 h-[40%] p-2.5 mx-auto bg-slate-600 cursor-pointer rounded-none text-base"            
            onClick={addHandler}>ADD CONTACT</button>
        </div>
        <div class="text-indigo-400 flex-wrap justify-center  text-2xl" >{alert && <p> {alert} </p>}</div>
        <Todos todos={todos} deleteHandler={deleteHandler}/>
    </div>)
};
export default TodoList;