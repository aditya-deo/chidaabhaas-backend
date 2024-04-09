const mongoose = require("mongoose");
// const AutoIncrement = require("mongoose-sequence")(mongoose);

const ChLikesModelSchema = new mongoose.Schema({
  LikeId: {
    type: Number,
    required: true,
  },
  PoemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChPoem",
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ChUser",
    required: true,
  },
});
// ChLikesModelSchema.plugin(AutoIncrement, { inc_field: "LikeId" });
const ChLike = mongoose.model("ChLike", ChLikesModelSchema);

module.exports = { ChLike };
