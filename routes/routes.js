const {Router} = require('express');
const PokemonController = require('../controller/pokemonController');
const TreinadorController = require('../controller/treinadorController');
const routes = Router();
//rotas pokemon
routes.post('/Pokemon',PokemonController.create);
routes.get('/Pokemons',PokemonController.getAll);
routes.get('/Pokemon/:id',PokemonController.getOne);
routes.put('/Pokemon/:id',PokemonController.update);
routes.delete('/Pokemon/:id',PokemonController.delete);
routes.get('/PokemonSearch',PokemonController.getAllByNome);

//rotas treinador
routes.post('/Treinador',TreinadorController.create);
routes.get('/Treinadores',TreinadorController.getAll);
routes.get('/Treinador/:id',TreinadorController.getOne);
routes.put('/Treinador/:id',TreinadorController.update);
routes.delete('/Treinador/:id',TreinadorController.delete);
routes.get('/TreinadorSearch',TreinadorController.getAllByNome)

module.exports = routes