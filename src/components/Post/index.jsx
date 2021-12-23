import './styles.css';
import {Link} from 'react-router-dom';
import IgsOrderContext from '../../context/igsOrderContext';
import { useContext } from 'react';

export const Post = (props) =>{

    const {image, username, caption, id} = props;

    const globalState = useContext(IgsOrderContext);

    const addIgToCart = () => {

        const ig = {
            id, 
            username,
            image,
            caption,
        }
        globalState.addIgToOrder(ig);
        console.log(globalState.order);
    }
    return(
        <div className="ig">
            <div className="ig-header">

            <h1 className="ig-username">{username}</h1>
        
            </div>
        
            <img className ="ig-photo" src={image} alt={""}/>  

            <div className="ig-footer">

            <h2 className="ig-caption">{caption}</h2> 
            </div>
        
        </div>
    )
}