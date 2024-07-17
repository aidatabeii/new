
function TodoItem({data:{id , name , lastName , email , phone  } ,deleteHandler,}) {
    
    return(
        <div >
        <li class="flex justify-between items-center text-slate-600  p-[10px 20px] mx-3 text-base" key={id}>
        <p >{name} {lastName}</p>
        <p ><span class="inline-block text-xl text-center mr-3 w-9 h-8 leading-9 rounded-[50%]">📫</span>{email}
        </p>
        <p ><span class="inline-block text-xl text-center mr-3 w-9 h-8 leading-9 rounded-[50%]">☎</span> {phone}
        </p>
        <button class="inline-block text-xl text-center mr-3 w-9 h-8 leading-9 rounded-[50%]"
         onClick={()=>deleteHandler(id)}>❌</button>
        
    </li>
    </div>
    );
}
export default TodoItem;