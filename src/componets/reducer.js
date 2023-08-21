export const initialState = {
    basket: ["hey"],
    user: null 
}

function reducer(state, action){
    console.log(action)
    console.log(state)

    switch(action.type){
        case "ADD_TO_BASKET":
            // Login for adding item to basket 
            console.log(action.item)
            console.log(state.basket)
                  return {
                    ...state,
                    basket: [ action.item, ...state.basket]
                    
                }

            break;

        case "REMORE_FROM_BASKET":
            // login for remove item from basket
                let newBasket = [...state.basket]
                const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id )

                if(index >=0 ){
                    // item exists in basket, remove it...
                    // newBasket.splice(index,1)
                    console.log(index)

                }else{
                    console.warn('this item is not exists in our store')
                    console.log(index)

                }



            return {...state, basket: newBasket}
            break

            default:
               return state
    }
}

export default reducer