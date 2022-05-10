import mongoose from "mongoose";
import Joi from "joi";
const { Schema } = mongoose

const User = mongoose.model('User', new mongoose.Schema({
    username: { 
      type: String, 
      required: true,
      minlength: 5,
      maxlength: 15,
      unique: true
    }
  }));

function validateUser(user) {
    const schema = {
        name: Joi.string().min(5).max(15).required()
    };
    return Joi.validate(user, schema);
}
export default User; validateUser;

