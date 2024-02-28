import mongoose from 'mongoose';

interface Notes {
  title: string,
  description: string,
  createdAt: Date
}

const NotesSchema = new mongoose.Schema<Notes>({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const NotesModel = mongoose.models.Notes || mongoose.model("Notes", NotesSchema);

export default NotesModel