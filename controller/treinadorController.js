const {Treinador} = require('../models');

class TreinadorController{
    async create(req,res){
        try{
            let treinador = req.body
            const TreinadorRes = await Treinador.create(treinador)
            return res.status(200).json(TreinadorRes)
        }
        catch(e){
            return res.status(400).json({error: e.message})
        }   
    }
    
    async getAll(req,res) {
        try{
            const treinadores = await Treinador.findAll();
            return res.status(200).json(treinadores);
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getOne(req,res) {
        try{
            const treinador = await Treinador.findByPk(req.params.id);
            if(treinador){
                return res.status(200).json(treinador);
            }
            else{
                return res.status(200).json({mensagem: "Treinador não encontrado"});
            }
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async update(req,res){
        try{
            const treinador = await Treinador.findByPk(req.params.id);
            if(treinador){
                await treinador.update(req.body)
                return res.status(200).json(treinador);
            }
            else{
                return res.status(200).json({mensagem: "Treinador não encontrado"})
            }
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async delete(req,res){
        try{
            const treinador = await Treinador.findByPk(req.params.id);
            if(treinador){
                await treinador.destroy();
                return res.status(200).json(treinador);
            }
            else{
                return res.status(200).json({mensagem: "Treinador não encontrado"})
            }
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

    async getAllByNome(req,res) {
        const nome = req.query.nome;
        try{
            const treinador = await Treinador.findAll({
                where: {
                    nome: nome 
                }
            })
            if(treinador){
                return res.status(200).json(treinador);
            }
            else{
                return res.status(200).json({mensagem: "Treinador não encontrado"})
            }
        }
        catch(e){
            return res.status(400).json({error: e.message});
        }
    }

}

module.exports = new TreinadorController()