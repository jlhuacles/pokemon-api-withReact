import { useEffect, useState } from "react";

function CommonData(props){
    const {pokemon,languages} = props;
    const [descriptionPok, updateDescription] = useState([]);
    const [languageUser, setLanguageUser] = useState(languages);
    let numberpokemon = pokemon.id;
    useEffect(() =>{

        let datosNuevos = [];
        // let languageOption = 'es';
        function validarLenguaje(entry){
            if(entry.language.name === languageUser){
              return true;
            }else{
              return false;
            }
        }

        async function traerDatos(){
        
            try{
                const dataSearch = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${numberpokemon}`);
                const dataSearchJson = await dataSearch.json();
                datosNuevos = dataSearchJson.flavor_text_entries.filter(validarLenguaje);
                if(datosNuevos){
                    updateDescription(datosNuevos[0].flavor_text);
                }else{
                    updateDescription('No tiene datos en este lenguaje');
                }
            }catch(e){
                console.error(e);
            }
    
            
        }
    
        traerDatos();

        if(languageUser !== languages){
            setLanguageUser(languages);
        }
    }, [numberpokemon, languageUser, languages]);
   
   
   
 
    

    return(
        <div className="commondata">
            <div className={`number-list`}>{pokemon.id}</div>
            <div className={`pokemon-description`}> {descriptionPok}  </div>
            
            
        </div>
    )
}

export default CommonData;