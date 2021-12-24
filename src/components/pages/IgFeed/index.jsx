import "./styles.css";
import {useEffect, useState, useContext} from 'react';
import { Post } from "../../Post";
import IgsOrderContext from "../../../context/igsOrderContext";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useHistory } from "react-router-dom";

export const IgFeed = () => {

  const [igs, setIgs] = useState([]);
  const history = useHistory();
  const globalState = useContext(IgsOrderContext);


//check if current user is logged into firebase

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

  useEffect(
    () => {
      getIgs();

    }, []
  );

  const getIgs = async() => {
    try{
      const response = await fetch('https://firestore.googleapis.com/v1/projects/instagram-exam/databases/(default)/documents/igs/');
      const data = await response.json();
      console.log(data);
      const formattedData = data.documents.map((item) => {
        return item.fields;
      });

      console.log (formattedData);

      setIgs(formattedData);

      globalState.initializeIgs(formattedData);


    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="igs-page">
      
      <div className="igs-container">
      { 
          igs.map((ig) => (
            <Post username={ig.username?.stringValue} image={ig.image?.stringValue} caption={ig.caption?.stringValue} id= {ig.id?.stringValue}></Post>
          )) 
        }

      </div>
      
    </div>
  );
 
};
