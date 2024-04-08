const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { ChUser } = require("../Models/ChUserModel");

const ChPoemModelSchema = new mongoose.Schema({
  PoemId: {
    type: Number,
    required: true,
    unique: true,
  },
  Poet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChUser",
    requried: false,
  },
  PoemTitle: {
    type: String,
    required: false,
  },
  PoemContent: {
    type: String,
    required: false,
  },
  CreatedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  LastModifiedDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
});
const ChPoem = mongoose.model("ChPoem", ChPoemModelSchema);

module.exports = { ChPoem };
