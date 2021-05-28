const GadgetController = require("../controllers/gadgethub.controller");

    module.exports = app => {
        app.get("/gadgets", GadgetController.findAllGadgets);
        app.get("/gadgets/:id", GadgetController.findOneGadget);
        app.post("/gadgets/new", GadgetController.createGadget);
        app.put("/gadgets/update/:id", GadgetController.updateGadget);
        app.delete("/gadgets/delete/:id", GadgetController.deleteGadget);
    }