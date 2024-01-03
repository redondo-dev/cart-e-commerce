import {createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext ({});

const ShoppingCartProvider = ({children}) => {
    const [cartItems, setCartItems]= useState([]);

    const getItemsQuantity =(id)=>{
        return cartItems.find((item)=>item.id===id)?.quantity||0;
    };

const increaseCartQuantity =(id)=>{
    setCartItems((currItems)=>{
        if(currItems.find(item=>item.id===id) ==null) {
            return [...currItems, {id,quantity:1}]
        }else{
            return currItems.map((item)=>{
                if(item.id===id){
                    return {...item , quantity :item.quantity + 1};
                }else{
                    return item;
                }

            });
        }
    });
   
};

    return (
        <ShoppingCartContext.Provider value={{
            cartItems,
            getItemsQuantity,
            increaseCartQuantity}}>
            {children}
            
        </ShoppingCartContext.Provider>
    );
};

export default ShoppingCartProvider;

export const useShoppingCart = ()=>{
    return useContext(ShoppingCartContext);
};
