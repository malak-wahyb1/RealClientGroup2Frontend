import { createContext,useState } from "react";
import CardProduct from "../components/card/card.js";
import { Card } from "@mui/material";


  export const CartContext=createContext({
    items:[],
    getProductQuantity:()=>{}, 
    addOneToCart:()=>{},
    removeoneFromCart:()=>{},
    deleteFromeCart:()=>{},
    getTotalCost:()=>{},
  })
  function Order({children}) {
    const[cardProducts,setCartProducts]=useState([]);
    
    function getProductQuantity(id){
      cardProducts.find(product=>product.id===id)?.qunatity
      if(quantity ==undefined){
        return 0;
      }
      return quantity
    }
    function addOneToCart(id){
      const quantity=getProductQuantity(id);
      if(quantity===0){

        setCartProducts([
          ...cardProducts,
          {
            id:id,
            qunatity:1
          }
        ])

      }else{
        setCartProducts(
          // [{id:1,quantity:3},{id:2,quantity:1+1}]
        cardProducts.map(
          product=>
          product.id===id
          ?{...product,quantity:product.quantity+1}
          : product
        )
        )
      }
    }

    function removeoneFromCart(id){
      const quantity=getProductQuantity(id);
      if(quantity==1){
        deleteFromeCart(id);

      }else{
        setCartProducts(
          
            // [{id:1,quantity:3},{id:2,quantity:1+1}]
          cardProducts.map(
            product=>
            product.id===id
            ?{...product,quantity:product.quantity-1}
            : product
          )
          )
        
      }
    }


    function deleteFromeCart(id){
      setCartProducts(
        cardProducts=>
        cardProducts.filter(currentProduct =>{
          return currentProduct.id!=id;
        })
      )
    }

    function getTotalCost(){
      let totalCost=0;
      cardProducts.map((cartItem)=>{
        const CardProduct=getProductData(cartItem.id);
        totalCost+=(productData.price*cartItem.quantity)
      })
    }

    const productsCount = Card.items.reduce((sum, product) => sum + product.quantity, 0);

    const contextValue={
      items:cardProducts ,
    getProductQuantity, 
    addOneToCart,
    removeoneFromCart,
    deleteFromeCart,
    getTotalCost,
    }
    return (
      <CartContext.Provider value ={contextValue}>
        {children}
      </CartContext.Provider>
    );
  }
  
  export default Order;