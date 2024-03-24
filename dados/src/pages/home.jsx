import React, { useState } from "react";
import { Dado } from '../components/dado';

export default function Home() {

  function Placar({ pontosJogador1, pontosJogador2 }) {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Placar</h3>
        <p>Jogador 1: {pontosJogador1}</p>
        <p>Jogador 2: {pontosJogador2}</p>
      </div>
    );
  }

  const [vitoriaj1, setVitoriaj1] = useState(0)
  const [vitoriaj2, setVitoriaj2] = useState(0)

  const [dado, setDado] = useState();
  const [dado2, setDado2] = useState();
  const [play, setPlay] = useState(true);

  const ganhador = (valor) =>{
    if(dado>valor){setVitoriaj1(vitoriaj1+1)}
    else if(valor>dado){setVitoriaj2(vitoriaj2+1)}
  }
  
  const handleClickJogar = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDado(valor);
    setPlay(!play);
  }

  const handleClickJogar2 = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDado2(valor);
    setPlay(!play);
    ganhador(valor);
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
        <Placar pontosJogador1={vitoriaj1} pontosJogador2={vitoriaj2}/>
      </div>

    </div>
  );
}

