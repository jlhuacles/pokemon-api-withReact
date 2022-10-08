import PokemonTypes from "./PokemonTypes";
import { useState } from "react";


// const TypesPokemon = (tipo) =>(
//     <div className={`pokemon-typelist ${tipo.type.name}`}>
//         {tipo.type.name}
//     </div>
// )






const UserListItem = (pokemon) =>{
    const [valorVerdadero, actualizarValor] = useState(false);
    const hacerClick = () => {
        
        actualizarValor(current => !current);}

 return(

    <div className={`pokemon-userlist--item${valorVerdadero?'-nuevo':''}`} onMouseEnter={hacerClick} onMouseLeave={hacerClick} >
        <div className={`carta`}>
            <div className={`cara delante`}>    
                <h2 className={'pokemon-userlist--item_title'}>{pokemon.name}</h2>
                <p className={`pokemon-userlist--item_number`}>Pokémon n° {pokemon.id}</p>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <div className="pokemon-typelist">{pokemon.types.map(tipo =>
                    // <div>{tipo.type.name}</div>
                    <PokemonTypes  {...tipo} key={`${pokemon.name}${pokemon.types.indexOf(tipo)}`} />
                )} </div>
            </div>
            <div className={"cara detras"}>
            
            </div>
        </div>
    </div>

);
}


export default UserListItem;