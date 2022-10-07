import PokemonTypes from "./PokemonTypes";


// const TypesPokemon = (tipo) =>(
//     <div className={`pokemon-typelist ${tipo.type.name}`}>
//         {tipo.type.name}
//     </div>
// )


const UserListItem = (pokemon) =>(
    <div className={`pokemon-userlist--item`}>
    <h2 className={'pokemon-userlist--item_title'}>{pokemon.name}</h2>
    <p className={`pokemon-userlist--item_number`}>Pokémon n° {pokemon.id}</p>
    <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
    <div className="pokemon-typelist">{pokemon.types.map(tipo =>
        // <div>{tipo.type.name}</div>
        <PokemonTypes  {...tipo}  key={`${pokemon.name}${pokemon.types.indexOf(tipo)}`}/>
    )} </div>
    </div> 
    
    );


export default UserListItem;