import { data } from "react-router-dom";
import Titulo from "../components/titulo";
import '../estilos/dashboard.css'
import { useEffect } from "react";

const Historico = ({historicoDespesas,setHistoricoDespesas,despesas}) => {

  useEffect(() => {
    let hoje = new Date();
    let mesAtual = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;
    const dia = hoje.getDate()
    console.log(dia);

    const ultimoDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth()+1, 0).getDate();
 
 
    const existeMes = historicoDespesas.some(item => item.mes === mesAtual);
 
    if(!existeMes && (dia === ultimoDiaDoMes)){
      const ultimasCincoDespesas = [...despesas].slice(0,5).map((despesa)=> ({
        nome: despesa.nome,
        valor:despesa.valor,
        categoria:despesa.categoria,
        data:despesa.data
      }));

      const totalDespesas = despesas.reduce((total, despesa) => total  + despesa.valor,0);


     let registroMes = {
         mes:mesAtual,
         totalDespesas,
         meta:0,
         despesas:ultimasCincoDespesas,
         dataRegistro : hoje.toISOString()
 
     };
 
     const novoHistorico = [...historicoDespesas,registroMes];
     setHistoricoDespesas(novoHistorico);
     localStorage.setItem("historicoDespesas", JSON.stringify(novoHistorico));
     console.log("Historico atualizado do mes:", mesAtual);
 
    }
  },[historicoDespesas,setHistoricoDespesas,despesas]);




   return(
    <main>
        <Titulo>Historico</Titulo>
        {historicoDespesas.length === 0? (<p>Nenhum historico disponível ainda.</p>): (
          <section className="listaHistorico">
            {historicoDespesas.map((item,index) => {
              <div className="itemHistorico" key={index}>
                <h2>{item.mes}</h2>
                <p><strong>Total:</strong> R$:{item.totalDespesas.toFixed(2)}</p>
                <h3>Despesas do mês:</h3>
                <ul>
                  {item.despesas.map((despesa,index) => {
                    <li key={index}>
                      {despesa.nome} - {despesa.valor} - {despesa.categoria}
                    </li>
                  })}
                </ul>
              </div>
            })}

          </section>
        )}
    </main>
   )
}

export default Historico;