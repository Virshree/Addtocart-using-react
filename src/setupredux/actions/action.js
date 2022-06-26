//addtocart actions is called when we call function,when we click 
//to add to cart button ,so whatever the items has it is collected.
//type is a function (ADD_CART) and payload will store item that we passed
//as parameter to it.
//(ADD_CART) is a function that is called in reducer.js
export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item,
    }
    
}

//delete items
export const DEL=(id)=>{
    return{
        type:"REMOVE_CART",
        payload:id,
    }
    
}
//remove individual item
export const REMOVE_ITEM=(item)=>{
    return{
        type:"REMOVE_ONE",
        payload:item,
    }
    
}