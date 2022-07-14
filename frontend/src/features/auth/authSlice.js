import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authService from './authService'


const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSucces: false,
    isLoading: false,
    message: ''
}



export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message = (error.responce && error.responce.data && error.responce.data.message) 
      || error.message || error.toString()
      return thunkAPI.rejectWithValue(message)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSucces = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: () => { }
})

export const { reset } = authSlice.actions
export default authSlice.reducer
