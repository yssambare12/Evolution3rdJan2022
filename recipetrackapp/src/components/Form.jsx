import { useState , useRef} from "react"
import { nanoid } from "nanoid";
import { Showing } from "./showrecipe";
export const Form=()=>{
    const [form,setForm]=useState({
        title:"", 
        ingredients:"", 
        time_to_cook:"", 
        image:"",
        instructions:""
    })
    const [list,setList]=useState([]);
    const ref=useRef("");
    const handleChange=(e)=>{
     const {name,value}=e.target;
    setForm({...form,[name]:value});
    }
    const handleFileChange=(e)=>{
        console.log(ref.current.files[0].name)
        setForm({...form,image:ref.current.files[0].name});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(ref.current.files[0].name)
        console.log(form);
        const payload={
        title:form.title, 
        ingredients:form.ingredients, 
        time_to_cook:form.time_to_cook, 
        image:form.image,
        instructions:form.instructions,
        id:nanoid(7)
        }
        setList([...list,payload]);
        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => console.log("done"));
       
    }
    return (
        <form onSubmit={handleSubmit} >
            <input onChange={handleChange} name="title" type="text" placeholder="title" style={{width:"100%"}}/>
            <input onChange={handleChange} name="ingredients" type="text" placeholder="ingredients" style={{width:"100%"}}/>
            <input onChange={handleChange} name="time_to_cook" type="text" placeholder="time_to_cook" style={{width:"100%"}}/>
            <input onChange={handleChange} name="instructions" type="text" placeholder="instructions" style={{width:"100%"}}/>     
            <input ref={ref} onChange={handleFileChange} type="file" style={{width:"100%"}}/> 
            <input type="submit" value="submit"/>
        </form>
    )
}