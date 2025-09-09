import express from "express";

import indexRouter from "./routes/index.js";

const app = express();

/** |Project: Inventory Application|
 * Step 1: Deploy to railway with no database.
 * Step 2: Deploy again to railway with a database. 
 */

const PORT = process.env.PORT || 8000; 

// Locating our views folder for EJS:
app.set("view engine", "ejs"); 

// Index Route: 
app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Servers is running on PORT ${PORT}`); 
}); 