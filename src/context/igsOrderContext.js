import React, {useState} from 'react';

const IgsOrderContext = React.createContext({
    igs:[],
    order: [],
    initializeIgs:() => {},
    addIgToOrder: () => {},
    removeIgFromOrder: () => {},
});

export const IgsOrderContextProvider = (props) => {
    const [order, setOrder] = useState([]);
    const [igs, setIgs] = useState([]);
    const initializeIgs = (igsFromApi) =>{
        setIgs(igsFromApi);
    }

    const addIgToOrder = (ig) => {
        let newOrder = order; 
        newOrder.push (ig);
        setOrder(order);
    }

    const removeIgFromOrder = (igId) => {
        let prevOrder = order;
        const found = order.findIndex( (ig ) => {
            return (ig.id === igId); 
        })
        if (found !== -1) {
            prevOrder.splice(found, 1); // delete one
            setOrder([...prevOrder]);
        } else {
            console.log ("error delete");
        }
    }
    
    return (<IgsOrderContext.Provider
     value={{order: order, addIgToOrder: addIgToOrder, removePetFromOrder: removeIgFromOrder, igs:igs, initializeIgs: initializeIgs }}
    >
        {props.children}
    </IgsOrderContext.Provider>)

} 

export default IgsOrderContext;