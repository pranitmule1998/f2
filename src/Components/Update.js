import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Update = () =>{

    const navigate =  useNavigate()

     const {studentsId} = useParams()

 const {register,handleSubmit,setValue} = useForm()

 async function fetchdata(){
    const result = await 
   axios.get(`http://localhost:8000/students/get/${studentsId}`);
   result.data=result.data[0]
     setValue("gender",result.data.gender)
     setValue("course",result.data.course)
     setValue("degree",result.data.degree)
}

function savedata(data){
    axios.put(`http://localhost:8000/students/update/${studentsId}`,data)
    navigate("/show");
  
  }

  useEffect(()=>{
    fetchdata()
  },[])




    return(
        <>
      <form onSubmit={handleSubmit(savedata)}>
        <label htmlFor="gender" ></label> <br/>
        <label  >Male</label>
        <input type="radio" id="male" value="male" name="gender" {...register("gender")} />
        <label  >Female</label>
        <input type="radio" id="female" value="female" name="gender" {...register("gender")} /> <br/>

           

            <select id="course" {...register("course")} >
                <option value={"html"} >HTML</option>
                <option value={"css"} >css</option>
                <option value={"js"} >js</option>
            </select>  <br/>

            <label htmlFor="degree"></label>

            <input type="checkbox" id="ba" value="B.A" {...register("degree")} />
            <label>B.A</label>

            <input type="checkbox" id="bsc" value="BSC"  {...register("degree")} />
            <label>BSC</label>

            <input type="checkbox" id="bcom" value="BCOM"  {...register("degree")}/>
            <label>Bcom</label> <br/>

            <button type="submit">Submit</button>

        </form>
        </>
    )
}
export default Update;