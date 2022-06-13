import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, name: 'Bob', email: 'bob@gmail.com' },
    { id: 2, name: 'Mahi', email: 'mahi@gmail.com' }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        adduser:(state, action) =>{
            state.push(action.payload)
        }
    }
});

export const {adduser} = userSlice.actions
export default userSlice.reducer