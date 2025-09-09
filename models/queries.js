import { pool } from "./pool.js";

// Will Select all the data from the game_inventory table:
async function GetAllGameData(){
    const { rows } = await pool.query("SELECT * FROM game_inventory");
    return rows;  
}

export default { GetAllGameData };  