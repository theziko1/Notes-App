import mongoose from 'mongoose';

interface Notes {
  title: string,
  description: string
}

const NotesSchema = new mongoose.Schema<Notes>({
  title: String,
  description: String
})

const NotesModel = mongoose.models.User || mongoose.model("Notes", NotesSchema);

export default NotesModel