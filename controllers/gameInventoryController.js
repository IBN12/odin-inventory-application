import db from "../models/queries.js";

const gameInventoryControllerGet = async(req, res) => {
    const games = await db.GetAllGameData();
    console.log(games); // Testing

    res.status(200).render("index", {
        title: "SoSu Game Inventory",
        games: games,
    });
}

export default { gameInventoryControllerGet }; 