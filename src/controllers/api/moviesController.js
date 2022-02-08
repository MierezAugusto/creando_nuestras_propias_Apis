
const db = require('../../database/models');



//Aqui tienen otra forma de llamar a cada uno de los modelos
const Movies = db.Movie;


const moviesController = {
    create: async (req,res) =>{
        try{
            let data = await Movies.create(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                }
            )
            res.json(data)

        }
        catch (err){
            res.status(400).response(err+1)
        }
    },

    destroy: async (req,res) =>{
        try{
            Movies.destroy({where: {id: req.params.id}, force: true})
            res.status(200).json("Pelicula borrada!")
        }
        catch (err){
            res.status(400).response(err+1)
        }
    }
}

module.exports = moviesController;