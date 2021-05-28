const Gadget = require("../models/gadgethub.model");

// create
module.exports.createGadget = (req, res) => {
    Gadget.create(req.body)
        .then(newGadget => res.json({gadget: newGadget}))
        .catch(err => res.json({message: "Error with adding", error: err}));
}

// read find one
module.exports.findOneGadget = (req, res) => {
    Gadget.findOne({_id: req.params.id})
        .then(singleGadget => res.json({gadget: singleGadget}))
        .catch(err => res.json({message: "Error with finding one", error: err}));
}

// read find all
module.exports.findAllGadgets = (req, res) => {
    Gadget.find()
        .then(allGadgets => res.json({gadgets: allGadgets}))
        .catch(err => res.json({message: "Error with finding all", error: err}));
}
// update

module.exports.updateGadget = (req, res) => {
    Gadget.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(updatedGadget => res.json({gadget: updatedGadget}))
        .catch(err => res.json({message: "Error with updating", error: err}))
}

// delete
module.exports.deleteGadget = (req, res) => {
    Gadget.deleteOne({_id: req.params.id})
        .then(result => res.json({result: result}))
        .catch(err => res.json({message: "Error with deleting", error: err}))
}