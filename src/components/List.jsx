import SearchPoke from './SearchPoke';
import UserListItem from './UserListItem';
import { useEffect, useState} from 'react';

import '../App.css';


const List = (props) =>{
    
    const [users, setUsers] = useState([]);
    const [numberPoks, setNumberPoks] = useState(20);
    const [searchValue, setSearchValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [boolButton, setBoolButton] = useState(false);
    useEffect(() =>{
    const fetchContent = async () =>{
            let arrayPokemons = [];
            try {
                setIsLoading(true);
                for(let i = 1; i <= numberPoks; i++){
                    const dataRecibida = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                    const result = await dataRecibida.json();
                    arrayPokemons.push(result);
                    
                }
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
            setUsers(arrayPokemons);

       }
       fetchContent();
    },[numberPoks])


    const loadMore = () =>{
        if(numberPoks<=139){
            setNumberPoks((numberPoks) => numberPoks + 20);
        }   else{
            setNumberPoks(151);
            setBoolButton(true);
            
        }
    }

    const loadAll = () =>{
        setNumberPoks(151);
        setBoolButton(true);
    }

    
    let standByMessage = "";
    let loadMessage = "";
    if(props.language === "en"){
        standByMessage = "Loading...";
        loadMessage  = "Load more";
    }else{
        standByMessage = "Cargando...";
        loadMessage = "Cargar más";
    }



    //Búsqueda de pokemon 
    let searchPokemon = [];
    
    if(!searchValue.length>=1){
        searchPokemon =  users;
    }else{
        searchPokemon = users.filter(pokemon =>{
            const searchedText = pokemon.name;
            const wantedPokemon = searchValue.toLowerCase();
            return searchedText.includes(wantedPokemon);
        })
    }
    return (
        <div className="content-box" id="mainTitle">
            <div className="user-list">
                
            <SearchPoke searchValue={searchValue} setSearchValue={setSearchValue} users={users} setUsers={setUsers} language={props.language}/>
            {searchPokemon.map(pokemon => <UserListItem  key={`pokemon-list-item-${pokemon.name}`} pokemon={pokemon} language={props.language}/>)}
           
            </div>
            <a href="#root"><div className="btn-large btn-up" >&#11014;</div></a>
            <a href="#loadButton"><div className="btn-large btn-down" >&#11015;</div></a>
            <button id="loadButton" onClick={loadMore} disabled={boolButton} className="btn waves-effect btn-loading">
                {isLoading ? standByMessage : loadMessage}
            </button>
            <button onClick = {loadAll} className="btn waves-effect btn-all" disabled={boolButton}>
                Cargar todo
            </button>
            
        </div>
       
    );
}

export default List;