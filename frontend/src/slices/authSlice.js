import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userInfo : localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfp')) : null

}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCridentials: (state, action) => {
            state.userInfo = action.payload
            localStorage.setItem('userInfo', JSON.stringify(action.payload))
        },
        logout : (state, action ) => {
            state.userInfo = null;
            localStorage.removeItem('userInfo')
        }
    },
})
export const {setCridentials, logout} = authSlice.actions
export default authSlice.reducer