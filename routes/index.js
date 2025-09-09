import express from "express"; 

import controllers from "../controllers/gameInventoryController.js"; 

const indexRouter = express.Router(); 

indexRouter.get("/", controllers.gameInventoryControllerGet);

export default indexRouter; 