import React, { useState } from "react";
import { Dado } from '../components/dado';

export default function Home() {
  const [dado, setDado] = useState();
  const [dado2, setDado2] = useState();
  const [play, setPlay] = useState(true);
  
  const handleClickJogar = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDado(valor);
    setPlay(!play);
  }
  const handleClickJogar2 = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDado2(valor);
    setPlay(!play);
  }
  
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Jogo de Dados</h1>
      <div style={{display:"flex",justifyContent:"space-around"}}>
        <div style={{textAlign:"center"}}>
          <h2>Jogador 1</h2>
          <Dado valor={dado} />
          {play ? <button onClick={handleClickJogar}>Jogar Dado</button> : <p>Espere sua vez</p>}
        </div>
        <div style={{textAlign:"center"}}>
          <h2>Jogador 2</h2>
          <Dado valor={dado2} />
          {!play ? <button onClick={handleClickJogar2}>Jogar Dado</button> : <p>Espere sua vez</p>}
        </div>
      </div>

    </div>
  );
}
