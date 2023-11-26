import axios from "axios";

import { useForm } from "react-hook-form";

const Add = () =>{

      const {register,handleSubmit} =  useForm()

       function savedata(data){
      axios.post("http://localhost:8000/students",data)
    
    }

    
      

    return(
        
        <form onSubmit={handleSubmit(savedata)}>
        <label htmlFor="gender" ></label> <br/>
        <label  >Male</label>
        <input type="radio" id="male" value="male" name="gender" {...register("gender")} />
        <label  >Female</label>
        <input type="radio" id="female" value="female" name="gender" {...register("gender")} /> <br/>

           

            <select id="course" {...register("course")} >
                <option value={"htmls"} >HTMLs</option>
                <option value={"csss"} >csss</option>
                <option value={"jss"} >jss</option>
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
    )
}
export default Add;