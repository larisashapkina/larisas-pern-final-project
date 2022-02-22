const db = require("../db/dbConfig.js");

getAllStilettos = async () =>{
    try{
        const allStilettos = await db.any("SELECT * FROM stilettos");
        return allStilettos;
    }catch(err){
        return err
    }
}

getOneStiletto = async(id)=>{
    try{
        const oneStiletto = await db.one("SELECT * FROM stilettos WHERE id=$1", id);
        return oneStiletto;
    }catch(err){
        return err
    }
};

deleteStiletto = async (id) =>{
    try{
        const deletedStiletto = await db.one(
            "DELETE FROM stilettos WHERE id=$1 RETURNING *", id);
            return deletedStiletto;
    }catch(err){
        return err
    }
};

createStiletto = async (stiletto) => {
    try{
        const newStiletto = await db.one ("INSERT INTO stilettos( name, description, price, rating, featured) VALUES($1, $2, $3, $4, $5) RETURNING *",
        [stiletto.name, stiletto.description, stiletto.price, stiletto.rating, stiletto.featured]);
        return newStiletto;
    }catch (err){
        return err
    }
}

updateStiletto = async (id, stiletto) => {
    try{
        const updatedStiletto = await db.one("UPDATE stilettos SET name=$1, description=$2, price=$3, rating=$4, featured=$5 WHERE id=$6 RETURNING *",
        [stiletto.name, stiletto.description, stiletto.price, stiletto.rating, stiletto.featured, id]);
        return updatedStiletto;

    }catch(err){
        return err
    }
}

module.exports = {getAllStilettos, getOneStiletto, deleteStiletto, createStiletto, updateStiletto};