import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id:"",
  email:"",
  role:""
}

// const initialState={
//   userInfo:{}
// }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

    loginData:(state,action)=>{
      const {id,email,role}=action.payload

      state.id=id,
      state.email=email,
      state.role=role
    },
    logout:(state,action)=>{
      state.userInfo={}
    }
  },
})

export const {loginData,logout}=userSlice.actions

export default userSlice.reducer