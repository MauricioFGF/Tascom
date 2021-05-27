import './App.css';
import baixo from "./img/baixo.gif"
import argentina from "./img/argentina.png"
import bolivia from "./img/bolivia.png"
import brasil from "./img/brasil.png"
import chile from "./img/chile.png"
import colombia from "./img/colombia.png"
import React, { useEffect, useState} from 'react';


function App(){
  const [global, setGlobal]= useState({});
  const [countries, setCountries]= useState({});
  const load = () =>{
    const axios = require('axios');
    axios.get(`https://api.covid19api.com/summary`)
    .then(res =>{
      const globalInfo = res.data.Global;
      setGlobal(globalInfo)
      const country = res.data.Countries;
      var i = 0;
      var dictCountries = {}
      for (var value of country ) { 
        if (value.Country === "Brazil" || value.Country === "Argentina" || value.Country === "Colombia"|| 
         value.Country === "Chile"|| value.Country === "Bolivia"){
          i++
          dictCountries[value.Country] = value
          if (i===5){break}
        }
      }
      if(dictCountries !== {}){
        setCountries(dictCountries)
      }
    }
    )
  }
  useEffect(() => {
    load();
  }, []);



  return(
    <div>
      {countries? 
      <>
        <nav>
          <a href="#dados"><p>Mundo</p></a>
          <a href="#paises"><p>América do Sul</p></a>
        </nav>
        <div className="global-div">
          <div className="tittle">
            <h1>Dados do Covid-19 pelo Mundo </h1>
          </div>
          <div className="scroll">
            <a href="#dados"><img width="80px" src={baixo} alt="botao" /></a>
          </div>
        </div>
        <div id ="dados">
          {global?
          <>
            <div className="dados-mundo">
              <h1> Covid-19 no Mundo</h1>
              <div className="opcoes" id="casos">
                <h3>Casos Novos: {global.NewConfirmed}</h3>
                <h3>Casos Totais: {global.TotalConfirmed}</h3>
              </div>
              <div className="opcoes" id="mortes">
                <h3>Novas Mortes: {global.NewDeaths}</h3>
                <h3>Mortes Totais: {global.TotalDeaths}</h3>
              </div>
              <div className="opcoes" id="recuperados">
                <h3>Novas Recuperações: {global.NewRecovered}</h3>
                <h3>Recuperações Totais: {global.TotalRecovered}</h3>
              </div>
            </div>
          </>
          :<></>}
        </div>
        <div id="paises">
          <h1> Países da América do Sul</h1>
          <div className="menu-paises">
            <a href="#cartao-argentina">
              <div className="pais" id="argentina">
                  <img src={argentina} alt="argentina" width="50px"/>
                  <p>Argentina</p>
              </div>
            </a>
            <a href ="#cartao-bolivia">
              <div className="pais" id="bolivia">
                <img src={bolivia} alt="bolivia" width="50px"/>
                <p>Bolívia</p>
              </div>
            </a>
            <a href ="#cartao-brasil">
              <div className="pais" id="brasil">
                <img src={brasil}  alt="brasil"width="50px"/>
                <p>Brasil</p>
              </div>
            </a>
            <a href ="#cartao-chile">
              <div className="pais" id="chile">
                <img src={chile} alt="chile" width="50px"/>
                <p>Chile</p>
              </div>
            </a>
            <a href ="#cartao-colombia">
              <div className="pais" id="colombia">
                <img src={colombia} alt="colombia" width="50px"/>
                <p>Colômbia</p>
              </div>
            </a>
          </div>
          <div className="div-cartao-paises">
            {console.log(countries)}
            {countries.Argentina? 
            <>
              <div className="cartao-paises" id="cartao-argentina">
                <h1>Argentina</h1>
                <div className ="cartao">
                  <h3>Novos Casos: {countries.Argentina.NewConfirmed}</h3>
                  <h3>Casos Totais: {countries.Argentina.TotalConfirmed}</h3>
                  <h3>Novas Mortes: {countries.Argentina.NewDeaths}</h3>
                  <h3>Mortes Totais: {countries.Argentina.TotalDeaths}</h3>
                  <h3>Novas Recuperações: {countries.Argentina.NewRecovered}</h3>
                  <h3>Recuperações Totais: {countries.Argentina.TotalRecovered}</h3>
                </div>
              </div>
            </>:<></>}
            {countries.Brazil?
            <>
              <div className="cartao-paises" id="cartao-brasil">
                <h1>Brasil</h1>
                <div className ="cartao">
                  <h3>Novos Casos: {countries.Brazil.NewConfirmed}</h3>
                  <h3>Casos Totais: {countries.Brazil.TotalConfirmed}</h3>
                  <h3>Novas Mortes: {countries.Brazil.NewDeaths}</h3>
                  <h3>Mortes Totais: {countries.Brazil.TotalDeaths}</h3>
                  <h3>Novas Recuperações: {countries.Brazil.NewRecovered}</h3>
                  <h3>Recuperações Totais: {countries.Brazil.TotalRecovered}</h3>
                </div>
              </div>
            </>:<></>}
            {countries.Bolivia?
            <>
              <div className="cartao-paises" id="cartao-bolivia">
                <h1>Bolivia</h1>
                <div className ="cartao">
                  <h3>Novos Casos: {countries.Bolivia.NewConfirmed}</h3>
                  <h3>Casos Totais: {countries.Bolivia.TotalConfirmed}</h3>
                  <h3>Novas Mortes: {countries.Bolivia.NewDeaths}</h3>
                  <h3>Mortes Totais: {countries.Bolivia.TotalDeaths}</h3>
                  <h3>Novas Recuperações: {countries.Bolivia.NewRecovered}</h3>
                  <h3>Recuperações Totais: {countries.Bolivia.TotalRecovered}</h3>
                </div>
              </div>
            </>:<></>}
            {countries.Chile?
            <>
              <div className="cartao-paises" id="cartao-chile">
                <h1>Chile</h1>
                <div className ="cartao">
                  <h3>Novos Casos: {countries.Chile.NewConfirmed}</h3>
                  <h3>Casos Totais: {countries.Chile.TotalConfirmed}</h3>
                  <h3>Novas Mortes: {countries.Chile.NewDeaths}</h3>
                  <h3>Mortes Totais: {countries.Chile.TotalDeaths}</h3>
                  <h3>Novas Recuperações: {countries.Chile.NewRecovered}</h3>
                  <h3>Recuperações Totais: {countries.Chile.TotalRecovered}</h3>
                </div>
              </div>
            </>:<></>}
            {countries.Colombia?
            <>
              <div className="cartao-paises" id="cartao-colombia">
                <h1>Colombia</h1>
                <div className ="cartao">
                  <h3>Novos Casos: {countries.Colombia.NewConfirmed}</h3>
                  <h3>Casos Totais: {countries.Colombia.TotalConfirmed}</h3>
                  <h3>Novas Mortes: {countries.Colombia.NewDeaths}</h3>
                  <h3>Mortes Totais: {countries.Colombia.TotalDeaths}</h3>
                  <h3>Novas Recuperações: {countries.Colombia.NewRecovered}</h3>
                  <h3>Recuperações Totais: {countries.Colombia.TotalRecovered}</h3>
                </div>
              </div>
            </>:<></>}

          </div>
        </div>
        <footer><p>© Copyright 2001-2020 Copyright.com.br - All Rights Reserved - Legal</p></footer>
      </>
      :<></>}

      </div>

  ) 
}

export default App;
