const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true, unique: true }
});

userSchema.methods.dudify = () => {
  return `${this.name}-dude`; 
};

var User = mongoose.model('User', userSchema);

module.exports = User;