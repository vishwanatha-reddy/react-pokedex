import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import pokemonsReducer from '../reducers/pokemonsReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({
        pokemons:pokemonsReducer
    }),applyMiddleware(thunk))
    return store;
}

export default configureStore;