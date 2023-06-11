import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState={
    searchField:'',
}

 const searchSlice=createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        search(state,action:PayloadAction<string>){
            state.searchField=action.payload;
        }
    }
})
export const { search } = searchSlice.actions
export default searchSlice.reducer;