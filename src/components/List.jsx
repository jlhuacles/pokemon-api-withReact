
import UserListItem from './UserListItem';
import { useEffect, useState} from 'react';
 


const List = () =>{
    
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        
       const fetchContent = async () =>{
            let arrayPokemons = [];
            try {
                
                for(let i = 1; i <=20; i++){
                    const dataRecibida = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
                    const result = await dataRecibida.json();
                    arrayPokemons.push(result);
                    
                }
            } catch (error) {
                console.error(error);
            }
            setUsers(arrayPokemons);

       }
       fetchContent();
    },[])


    
    return (
        <div className="user-list">
          {users.map(pokemon => <UserListItem  key={`pokemon-list-item-${pokemon.name}`} {...pokemon}/>)}
        </div>
    );
}

export default List;