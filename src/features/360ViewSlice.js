import { createSlice } from "@reduxjs/toolkit"

// 0, 25, 600
const initialState = {
    threeSixtyDegree:false
}


const threeSixtyViewer =  createSlice({
    name:"360Viewer",
    initialState,
    reducers:{
        startThreeSixty:(state,{payload})=>{
            console.log(state)
                 state.threeSixtyDegree=!(state.threeSixtyDegree) 
                 console.log(state)
        }
    }
 })


export const {startThreeSixty} =  threeSixtyViewer.actions
 export default threeSixtyViewer.reducer