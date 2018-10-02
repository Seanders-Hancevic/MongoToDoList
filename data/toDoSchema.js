const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
const toDoSchema = new Schema({
  thingToDo: {
    type: String,
  },
  completed: {
    type: Boolean,
  },

});

// This creates our model from the above schema, using Mongoose's model method
var toDoList = mongoose.model('toDoList', toDoSchema);

// Export the Inventory model
module.exports = toDoList;