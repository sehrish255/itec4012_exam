import { getAuth, onAuthStateChanged } from "@firebase/auth";
import {useEffect, useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import "./styles.css";
import { Post } from "../../Post";
import IgsOrderContext from "../../../context/igsOrderContext";

export const IgHomePage = () => {

    const history = useHistory();
    const [setIgs] = useState([]);
    const globalState = useContext(IgsOrderContext);
    const [filteredIgs, setFilteredIgs ] = useState([]);

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

      setFilteredIgs(formattedData);

      globalState.initializeIgs(formattedData);


    }catch(err){
      console.log(err);
    }
  }


  return (
    <div className="igs-page">
      
      <div className="igs-container">
      { 
          filteredIgs.map((ig) => (
            <Post username={ig.username?.stringValue} image={ig.image?.stringValue} caption={ig.caption?.stringValue} id= {ig.id?.stringValue}></Post>
          )) 
        }

      </div>
      
    </div>
  );

};

