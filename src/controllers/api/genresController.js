const db = require('../../database/models');



const genresController = {
    'list': async (req, res) => {
        try{
            let data = await db.Genre.findAll()
            let response ={
                meta:{status: 200,
                total: data.length,
                url: "api/genres"},
                data: data
            }
            res.status(200).json(response)
    }
    catch (err){
        res.status(400).response(err+1)
    }
},
    'detail': async(req, res) => {
        try{
            let data = await db.Genre.findByPk(req.params.id)
            let response ={
                meta:{
                status: 200,
                url: `api/genres/${req.params.id}`},
                data: data
            }
            res.status(200).json(response)
        }
        catch (err){
            res.status(400).response(err+1)
        }
        
            
    }

}

module.exports = genresController;