import List from './components/List';
import Bottom from './components/Bottom';

// import {Suspense} from 'react';
// import Spinner from './components/Spinner';
import M from 'materialize-css';
import { useState, useEffect } from "react";


function App() {
  const [languageDefect, setLanguages] = useState("es")
  const ITEMS_PER_PAGE = 10;
  const changeLanguage = (language) =>{
      setLanguages(language);
    }

  useEffect(() =>{
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  },[])


  


  let principalText = "";
  if(languageDefect === "en"){
    principalText = "Kanto region's Pokédex";
  }else{
    principalText = "Pokédex de la región Kanto";
  }



  return ( 
    <div className="App">
      
      <ul className="sidenav" id="mobile-demo">
        <li><a href={'http://google.com'}>asssssssssda</a></li>
        <li><a href={'http://google.com'}>asdssssssssa</a></li>
      </ul>
      <div className="nav-buttonLanguage">
        <button className="buttonLanguage" onClick={()=> changeLanguage("en")}>English</button>
        <button className="buttonLanguage" onClick={()=> changeLanguage("es")}>Español</button>
      </div>
      <h1>{principalText} </h1>
      

      {/* <Suspense fallback={<h1 className="casa">Loading posts...</h1>}> */}
        <List language={languageDefect} currentPage={ITEMS_PER_PAGE} />
        {/* </Suspense> */}
        <Bottom/>
      
    </div>
   
  );
}

export default App;
