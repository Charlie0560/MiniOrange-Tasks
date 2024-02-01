import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0
    },

    reducers:{
        add_to_cart: state=>{
            state.value += 1;
        }
        ,
        remove_from_cart: state=>{
            state.value-=1;
        }
        
    }
})

export const{remove_from_cart,add_to_cart} = counterSlice.actions;

export default counterSlice.reducer;