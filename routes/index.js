import express from "express"; 

import db from "../models/queries.js";

const indexRouter = express.Router(); 

async function GetAllGames(){
    return await db.GetAllGameData();
}

indexRouter.get("/", (req, res) => {
    res.status(200).render("index", {
        title: "SoSu Inventory Application",
        gameInventoryRows: GetAllGames(),
    });
});

export default indexRouter; 