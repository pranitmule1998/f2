import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams} from "react-router-dom";

const Delete = () =>{
    const {studentsId} =  useParams()

   const navigate =  useNavigate()
  
    const [user,setuser] =  useState({})


    async function fetchdata(){
        const result = await 
       axios.get(`http://localhost:8000/students/get/${studentsId}`);
         setuser(result.data[0])
    }

    function deletedata(){
        axios.delete(`http://localhost:8000/students/delete/${studentsId}`)
         navigate("/show");
    }

    useEffect(()=>{
        fetchdata()
    },[])


    return(
        <form onSubmit={()=>deletedata()} >
       <h1>Are u want to delete data of {user.gender}</h1>

 <input type="submit" value={"yes"} />
 <NavLink to={"/show"}><button>No</button></NavLink> 

        </form>
    )
}
export default Delete;