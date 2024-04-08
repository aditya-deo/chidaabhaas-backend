const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ChUserModelSchema = new mongoose.Schema({
  UserId: {
    type: Number,
    required: true,
  },
  UserName: {
    type: String,
    required: false,
  },
  Email: {
    type: String,
    required: false,
  },
});
// ChUserModelSchema.plugin(AutoIncrement, { inc_field: "UserId" });
const ChUser = mongoose.model("ChUser", ChUserModelSchema);

module.exports = { ChUser };
