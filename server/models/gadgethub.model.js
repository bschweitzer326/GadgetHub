const mongoose = require("mongoose");

const GadgetSchema = new mongoose.Schema({
    
}, { timestamps: true })

const Gadget = mongoose.model("Gadget", GadgetSchema);

module.exports = Gadget