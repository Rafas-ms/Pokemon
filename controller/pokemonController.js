const {Pokemon} = require('../models');

class PokemonController{
    async create(req,res){
        try{
            let pokemon = req.body
            const PokemonRes = await Pokemon.create(pokemon)
            return res.status(200).json(PokemonRes)
        }
        catch(e){
            return res.status(400).json({error: e.message})
        }
    }

    async getAll(req,res) {
        try{
            const pokemons = await Pokemon.findAll()
            return res.status(200).json(pokemons);
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getOne(req,res) {
        try{
            const pokemon = await Pokemon.findByPk(req.params.id);
            if(pokemon){
                return res.status(200).json(pokemon);
            }
            else{
                return res.status(200).json({mensagem: "Pokemon não encontrado"})
            }
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async update(req,res) {
        try{
            const pokemon = await Pokemon.findByPk(req.params.id);
            if(pokemon){
                await pokemon.update(req.body);
                return res.status(200).json(pokemon);
            }
            else{
                return res.status(400).json({mensagem: "Pokemon não encontrado"})
            }
        }
        catch(e){
            return res.status(400).json({error: e.message})
        }
    }

    async delete(req,res){
        try{
            const pokemon = await Pokemon.findByPk(req.params.id);
            if(pokemon){
                await pokemon.destroy()
                return res.status(200).json(pokemon);
            }
            else{
                return res.status(200).json({mensagem: "Pokemon não encontrado"})
            }
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getAllByNome(req,res) {
        const nome = req.query.nome;
        try{
            const pokemon = await Pokemon.findAll({
                where: {
                    nome: nome 
                }
            })
            if(pokemon){
                return res.status(200).json(pokemon);
            }
            else{
                return res.status(200).json({mensagem: "Pokemom não encontrado"})
            }
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }
}

module.exports = new PokemonController()