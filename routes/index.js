import express from "express"; 

const indexRouter = express.Router(); 

indexRouter.get("/", (req, res) => {
    res.status(200).render("index", {
        title: "SoSu Inventory Application",
    });
});

export default indexRouter; 