import {useForm} from "react-hook-form";
import "./styles.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";

export const NewPost = () =>{

    const {register, handleSubmit } = useForm();
    const history = useHistory();

    useEffect(
        () => {
          const auth=getAuth();
          onAuthStateChanged(auth, (user) =>{
            if (!user){
              history.push('/login');
            }
          })
      
        }, []
      );
      

    const submitIg = async (formVals) => {
        const formattedData ={
            fields:{
                
                image:{
                    stringValue: formVals.image
                },
                caption:{
                    stringValue: formVals.caption
                },
            }
        }

        
    console.log(formVals, formattedData);
    try {
        const response=await fetch('https://firestore.googleapis.com/v1/projects/instagram-exam/databases/(default)/documents/igs/',
    {
        headers: {
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(formattedData)
    })
    history.push('/');
    } catch (error) {
        console.log("Error", error);
    }  
    };

    return(
        <div className= "igs-page">
            <form className="form-layout" onSubmit={handleSubmit(submitIg)}>
                <h2>Submit a new post: </h2>
                <br/>

    <label htmlFor="image"> Image URL</label>
                <input
                    {...register("image")}
                    name="image"
                    required
                />
    <label htmlFor="caption"> Caption</label>
                <input
                {...register("caption")}
                name="caption"
                required
                />

    <input type="submit" value="Post" />
    <br/>
            </form>
            
        </div>
    )
}