import React, {createContext,useReducer} from "react";
import { cardReducer } from "./cardReducer";

export const CardContext = createContext();

const initialState = { cardItems : []};

const CardContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(cardReducer,initialState);
    const addProduct = payload=>{
        dispatch({type:"ADD", payload});
        debugger;
    }
    const removeProduct = payload =>{
        dispatch({type : "REMOVE",payload});
    }

    const increaseQty = payload =>{
        dispatch({type : "INCQTY",payload});
    }

    const decreaseQty = payload =>{
        dispatch({type : "DECQTY",payload});
    }

    const clearBasket = ()=>{
        dispatch({type : "CLEAR" , payload : undefined})
    }
    const getItems = ()=>{
        return state.cardItems || [];
    }
    const contextValues = {
        addProduct,
        removeProduct,
        increaseQty,
        decreaseQty,
        clearBasket,
        getItems,
        ...state
    }
    return (
        <CardContext.Provider value={contextValues}>
            {children}
        </CardContext.Provider>
    )
}
export default CardContextProvider;