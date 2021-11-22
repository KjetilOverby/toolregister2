const mongoose = require("mongoose");

const ToolRegistSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  antall: {
    type: Number,
  },
  img: {
    type: String,
  },
  date: {
    type: Date,
  },
});

module.exports =
  mongoose.models.Toolregist || mongoose.model("Tools", ToolRegistSchema);
