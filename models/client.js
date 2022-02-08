const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Client must have a name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Client must have an email"],
    trim: true,
  },
});

module.exports = mongoose.models.Client || mongoose.model("Client", ClientSchema);
