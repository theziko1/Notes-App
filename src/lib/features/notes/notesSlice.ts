import { createSlice  , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
 


interface notes {
    id ?: any,
    title: string;
    description: string;
    createdAt:string
    _id:string
  }

const initialState:{
    notes:notes[]  
    note:notes
} = {
     notes : [],
} as any

export const PostNote = createAsyncThunk('notes/postNote', async (notes : Partial<notes> ,{ rejectWithValue }) => {
    try {
        const res = await axios.post(`/api/notes`,notes)
        console.log(process.env.BASE_URL)
        return res.data as notes
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const GetAll = createAsyncThunk('notes/getAll', async () => {
    try {
        const res = await axios.get(`/api/notes`)
        return res.data
        
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return message;
    }
})

export const GetOne = createAsyncThunk('notes/getOne', async (noteId:{id:string} , {rejectWithValue }) => {
     try {
        const res = await axios.get(`/api/notes/${noteId?.id}`)
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const UpdateNote = createAsyncThunk('notes/Update', async ( notes:Partial<notes> , {rejectWithValue }) => {
    try {
        const res = await axios.put(`/api/notes/${notes.id}`,notes)
        return res.data
    } catch (error : any) {
        const message =  error.response.data.error || error.response.data.message
        return rejectWithValue(message);
    }
})

export const DeleteNote = createAsyncThunk('notes/Delete', async (noteId:string, {rejectWithValue }) => {
    try {
        const res = await axios.delete(`/api/notes/${noteId}`)
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
        state.note = action.payload

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