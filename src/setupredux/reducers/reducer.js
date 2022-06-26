//in reducer we check if the type is match from action
//so type here is ADD_CART function if there exists then we add to store.

//we want to store data in array so we pass inital array to carts.
const INIT_STATE={
    carts:[]
};

//cart reducer takes two arguments (state,action)

export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            //logic for Adding quantity when user click on add to cart button.
            //check if 
            const ItemIndex=state.carts.findIndex((item)=>item.id ===action.payload.id)
            if(ItemIndex>=0)
            {
                state.carts[ItemIndex].qnty+=1;
            }
            else{
                const temp={...action.payload,qnty:1}
                return{
                ...state,           //previous item
                carts:[...state.carts,temp] //previous item+new items add to cart 
            }
            }
            
        // eslint-disable-next-line no-fallthrough
        case "REMOVE_CART":
            const data=state.carts.filter((el)=>el.id !== action.payload);
            return{
                ...state,
                carts:data
            }
        case "REMOVE_ONE":
             const ItemIndexdel=state.carts.findIndex((item)=>item.id ===action.payload.id)
            
            if(state.carts[ItemIndexdel].qnty>=1){
                const delItem=state.carts[ItemIndexdel].qnty-=1;
                console.log([...state.carts,delItem]);
            
            return{
                ...state,
                carts:[...state.carts]
            }
        }
            else if(state.carts[ItemIndexdel].qnty===1){
                const data=state.carts.filter((el)=>el.id !== action.payload);
            return{
                ...state,
                carts:data
            }
            }
             // eslint-disable-next-line no-fallthrough
             default:
                return state
    }
    
}