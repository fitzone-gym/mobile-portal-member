import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type userType = {
    id: number | null
    first_name: string
    last_name: string
    image: string
}

const initialState = {
    id: null,
    first_name: '',
    last_name: '',
    image: ''
} as userType;


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUser: (state, action: PayloadAction<userType>) =>{
            state.id = action.payload.id;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;
            state.image = action.payload.image;
        },
        removeUser: (state) =>{
            state.id = null
            state.first_name = ''
            state.last_name = ''
            state.image = ''
        },
        
    }
})



export  default userSlice.reducer
export const { setUser, removeUser }  = userSlice.actions;


