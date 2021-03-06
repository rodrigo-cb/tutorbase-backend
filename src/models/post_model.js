import mongoose, { Schema } from 'mongoose';

// create a PostSchema with a title field
const PostSchema = new Schema({
  type: String,
  userID: String,
  department: String,
  class: String,
  availability: String,
  notes: String,
  responses: [String],
  userObjID: Schema.Types.ObjectId,
}, {
  toObject: { virtuals: true },
  toJSON: { virtuals: true },
});


// create PostModel class from schema
const PostModel = mongoose.model('Post', PostSchema);


export default PostModel;
