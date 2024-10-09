import { createSlice,  } from "@reduxjs/toolkit";
const initialState ={
    data:[],
    sr_no:1,
    totalAmount : 0
}
const pageSlice = createSlice({
    name:"rootSlice",
    initialState,
    reducers :{
        setData:(state,action) =>{
            state.data = action.payload
        },
        setSrno:(state,action) =>{
            state.sr_no = action.payload
        },
        setStoreTotalAmount:(state,action) =>{
            state.totalAmount = action.payload
        },
        // setCurrentPage:(state,action)=>{
        //     state.currentPage = action.payload
        // },
    }
})

export const {setData,setSrno,setStoreTotalAmount} = pageSlice.actions
export default pageSlice.reducer