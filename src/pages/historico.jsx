import { data } from "react-router-dom";
import Titulo from "../components/titulo";
import '../estilos/dashboard.css'
import { useEffect } from "react";

const Historico = ({historicoDespesas,setHistoricoDespesas}) => {

  useEffect(() => {
    let hoje = new Date();
    let mesAtual = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;
    const dia = hoje.getDate()
    console.log(dia);
 
 
    const existeMes = historicoDespesas.some(item => item.mes === mesAtual);
 
    if(!existeMes && (dia >= 1 && dia <= 31)){
     let registroMes = {
         mes:mesAtual,
         totalDespesas : 0,
         meta:0,
         despesas: [],
         dataRegistro : hoje.toISOString()
 
     };
 
     const novoHistorico = [...historicoDespesas,registroMes];
     setHistoricoDespesas(novoHistorico);
     localStorage.setItem("historicoDespesas", JSON.stringify(novoHistorico));
 
    }
  },[]);




   return(
    <main>
        <Titulo>Historico</Titulo>
    </main>
   )
}

export default Historico;