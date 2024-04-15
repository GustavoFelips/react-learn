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
  const [contador, setcontador] = useState(0)
  const [vitoriaj1, setVitoriaj1] = useState(0)
  const [vitoriaj2, setVitoriaj2] = useState(0)

  const [dado, setDado] = useState();
  const [dado2, setDado2] = useState();
  const [play, setPlay] = useState(true);
  const [play2, setPlay2] = useState(false);

  const ganhador = (valor) =>{
    if(dado>valor){setVitoriaj1(vitoriaj1+1)}
    else if(valor>dado){setVitoriaj2(vitoriaj2+1)}
  }
  
  const handleClickJogar = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDado(valor);
    setPlay(!play);
    setPlay2(!play2);
    setcontador(contador+1)
    
  }

  const handleClickJogar2 = () => {
    const valor = Math.floor(Math.random() * 6) + 1;
    setDado2(valor);
    setPlay(!play);
    setPlay2(!play2);
    ganhador(valor);
    setcontador(contador+1)
    if(contador == 9){
      setPlay(false)
      setPlay2(false)
    }
  }

  const vitoria = () => {
    if(contador == 10){
      if(vitoriaj1 > vitoriaj2){
        return "Jogador 1 Ganhou"
      }
      else if (vitoriaj2>vitoriaj1){
        return("Jogador 2 Ganhou")
      }
      else return "Empate"
    }
    else return false
  }

  const resetar = () => {
    setcontador(0)
    setVitoriaj1(0)
    setVitoriaj2(0)
    setDado(0)
    setDado2(0)
    setPlay(true)
    setPlay2(false)

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
          {play2 ? <button onClick={handleClickJogar2}>Jogar Dado</button> : <p>Espere sua vez</p>}
        </div>
        <Placar pontosJogador1={vitoriaj1} pontosJogador2={vitoriaj2}/>
      </div>
      {vitoria() ? <div><h2>{vitoria()}</h2><button onClick={resetar}>resetar</button></div> : <h2></h2>}

    </div>
  );
}

