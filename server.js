const express = require('express');
    const app = express();
    const port = 8000;
    const cors = require('cors');
    
    require("./server/config/mongoose.config");
    
    app.use(cors());
    
    app.use(express.json(), express.urlencoded({extended:true}));
    
    const AllMyRoutes = require("./server/routes/GadgetHub.routes");
    AllMyRoutes(app);

    app.listen(port, () => console.log(`Listening on port: ${port}`) );