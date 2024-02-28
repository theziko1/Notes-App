import { createSlice  , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface notes {
    title: string;
    description: string;
  }

const initialState = {
     notes : null
} as any

export const PostNote = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/postNote', async (notes ,{ rejectWithValue }) => {
    try {
        const res = await axios.post("http://localhost:3000/api/notes/",notes)
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const GetAll = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/getAll', async (notes ,{rejectWithValue }) => {
    try {
        const res = await axios.get("http://localhost:3000/api/notes/")
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const GetOne = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/getOne', async (notes , {rejectWithValue }) => {
     try {
        const res = await axios.get("http://localhost:3000/api/notes/")
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const UpdateNote = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/Update', async (notes , {rejectWithValue }) => {
    try {
        const res = await axios.put("http://localhost:3000/api/notes/",notes)
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const DeleteNote = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/Delete', async (notes, {rejectWithValue }) => {
    try {
        const res = await axios.delete("http://localhost:3000/api/notes/")
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

const notesSlice = createSlice({
  name : "notes",
  initialState,
  reducers : {},
  extraReducers: (builder) => {
    builder
    .addCase(PostNote.fulfilled,(state,action)=>{
        state.notes = action.payload
    })
    .addCase(GetAll.fulfilled,(state,action)=>{
          state.notes = action.payload
    })
    .addCase(GetOne.fulfilled,(state,action)=>{
        state.notes = action.payload
    })
    .addCase(UpdateNote.fulfilled,(state,action)=>{
        state.notes = action.payload
  })
  .addCase(DeleteNote.fulfilled,(state,action)=>{
      state.notes = action.payload
  });
  }
  

})


export default notesSlice.reducer