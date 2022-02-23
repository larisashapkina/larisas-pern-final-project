const express = require("express");
const stilettos = express.Router();
const { getAllStilettos, getOneStiletto, deleteStiletto, createStiletto, updateStiletto } = require("../queries/stilettos.js");
const reviewsController = require("./reviewsController.js");
//we bring our reviews controller into stiletto controller so that when we nest this routes so we have an access whats happening in our reviews controller
stilettos.use("/:stilettoId/reviews", reviewsController);
//

stilettos.get("/", async (req, res) => {
  try {
    const allStilettos = await getAllStilettos();
    if (allStilettos[0]) {
      res.status(200).json(allStilettos);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (err) {
    return err;
  }
});

stilettos.get("/:id", async (req,res) =>{
    const { id } = req.params;
    try{
        const stiletto = await getOneStiletto(id);
        if(stiletto.id){
            res.status(200).json(stiletto);
        } else {
            res.status(404).json({ error: "not found"});
        }
    }catch(err){
        console.log(err);
    }
});

stilettos.delete("/:id", async(req,res)=>{
    const { id } = req.params;
    const deletedStiletto = await deleteStiletto(id);
    if(deletedStiletto.id){
        res.status(200).json(deletedStiletto);
    }else{
        res.status(404).json({error: "undefined"});
    }
  });
  

stilettos.post("/", async (req, res)=>{
    let { body } = req;
    try{
      const createdStiletto = await createStiletto(body);
        if(createdStiletto.id){
            res.status(200).json(createdStiletto);
        }else {
            res.status(500).json({error: "Stiletto creation error"});
        }
    } catch(err){
        console.log(err);
    }
}) 

stilettos.put("/:id", async(req,res)=>{
    const { id } = req.params;
    let { body } = req;
    const updatedStiletto = await updateStiletto(id, body);
    if(updatedStiletto.id){
      res.status(200).json(updatedStiletto)
    } else{
      res.status(404).json({error: "Cannot update stiletto"})
    }
  })
module.exports = stilettos;