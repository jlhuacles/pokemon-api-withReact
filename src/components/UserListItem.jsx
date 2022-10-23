import PokemonTypes from "./PokemonTypes";
import { useState, useEffect } from "react";
import CommonData from "./CommonData";
import logo from '../pngegg.png';

// const TypesPokemon = (tipo) =>(
//     <div className={`pokemon-typelist ${tipo.type.name}`}>
//         {tipo.type.name}
//     </div>
// )






const UserListItem = (props) =>{
    const {pokemon, language} = props;
    const [valorVerdadero, actualizarValor] = useState(false);
    const [pokemonSpecies, setSpecies] = useState("");
    let numberpokemon = pokemon.id;
    const hacerClick = () => {
        actualizarValor(valor => !valor);
    }
    
    useEffect(() => {
        async function speciesQuiz(){
            
            try{
                const dataSearchs = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${numberpokemon}`);
                const dataSearchJsons = await dataSearchs.json();
                setSpecies(dataSearchJsons.color.name);
                
                
            }catch(e){
                console.error(e);
            }
            
        }
        
        speciesQuiz();
        
    }, [numberpokemon])
   
   
    

        
 return(
    
    <div className={`pokemon-userlist--item${valorVerdadero?'-nuevo':''}`} onMouseEnter={hacerClick} onMouseLeave={hacerClick} >
       
        <div className={`carta`}>
            <div className={`cara delante`} style={{background: `linear-gradient(to top, #fafbfd 30% 10%, ${pokemonSpecies?pokemonSpecies:'green'} 90% 10%`}}>
                
                <h2 className={'pokemon-userlist--item_title'}>{pokemon.name}</h2>
                {/* <p className={`pokemon-userlist--item_number`}>Pokémon n° {pokemon.id}</p> */}
                <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                <div className="pokemon-typelist">{pokemon.types.map(tipo =>
                    // <div>{tipo.type.name}</div>
                    <PokemonTypes  {...tipo} key={`${pokemon.name}${pokemon.types.indexOf(tipo)}`} />
                )} </div>
                <CommonData pokemon={pokemon} languages={language}/>
            </div>
            <div className={"cara detras"}>
                <img className="logoPokemon" src={logo} alt="Logo Pokemon"/>
            </div>
        </div>
    </div>
                   
);
}


export default UserListItem;