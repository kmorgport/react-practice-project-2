import {useReducer} from 'react'

import CartContext from './cart-context'

const defaultCartState = {
    items:[],
    totalAmount: 0
}

const cartReducer = (state, action) =>{
    if(action.type === 'ADD'){
        //you want to edit your state in an immutable way
        //return new state object instead of editing old state in memory
        const updatedItems = state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount * action.item.amount
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState
}

const CartProvider = props => {
    //first arg: Reducer, second arg: defaultState
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    
    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type:'REMOVE',
            id: id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider