import mongoose from 'mongoose';


const TodoSchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  datCreated: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model('Todo', TodoSchema);