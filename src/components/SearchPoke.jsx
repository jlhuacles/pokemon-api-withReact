import React from "react";



function SearchPoke({searchValue, setSearchValue, users, setUsers, language}){

    const onSearchValueChange= (event) =>{
        
        setSearchValue(event.target.value);
    }

    let placeholderText = "";

    if(language === 'en'){
        placeholderText = "Find your Pokémon"
    }else{
        placeholderText = "Busca tu Pokémon"
    }

    return(
        <input  className="todoSearch"
               placeholder={placeholderText}
               value={searchValue}
               onChange={onSearchValueChange}
               />
    )
    
}

export default SearchPoke;