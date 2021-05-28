const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/GadgetHub", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("I have connected to the database using mongoose!!"))
.catch(err => console.log("Something went wrong with connecting to mongoose", err));