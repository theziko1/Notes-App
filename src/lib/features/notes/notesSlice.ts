import { createSlice  , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


interface notes {
    id ?: any,
    title: string;
    description: string;
  }

const initialState = {
     notes : [],
} as any

export const PostNote = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/postNote', async (notes ,{ rejectWithValue }) => {
    try {
        const res = await axios.post("http://localhost:3000/api/notes",notes)
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const GetAll = createAsyncThunk('notes/getAll', async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/notes")
        return res.data
        
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return message;
    }
})

export const GetOne = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/getOne', async (noteId , {rejectWithValue }) => {
     try {
        const res = await axios.get(`http://localhost:3000/api/notes/${noteId.id}`)
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const UpdateNote = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/Update', async ( notes , {rejectWithValue }) => {
    try {
        const res = await axios.put(`http://localhost:3000/api/notes/${notes.id}`,notes)
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const DeleteNote = createAsyncThunk<{notes : notes}, notes , { rejectValue: string }>('notes/Delete', async (noteId, {rejectWithValue }) => {
    try {
        const res = await axios.delete(`http://localhost:3000/api/notes/${noteId}`)
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
        state.notes.push(action.payload)
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
      state.notes = state.notes.filter(( item : any) => item.id !== action.payload.notes);
    
  });
  }
  

})


export default notesSlice.reducer