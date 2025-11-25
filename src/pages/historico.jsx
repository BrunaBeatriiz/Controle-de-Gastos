import { Navigate, data, useNavigate } from "react-router-dom";
import Button from "../components/button";
import Titulo from "../components/titulo";
import '../estilos/historico.css'
import { useState } from "react";
import '../estilos/dashboard.css'
import GraficoBarra from "../components/graficoBarra";
import { useEffect } from "react";
import calculoSaldo from "../functions/funçaoCalculoSaldo";


const Historico = ({ historicoDespesas, setHistoricoDespesas, despesas, metaGastos,saldo }) => {

 
 

  const navigate = useNavigate();
  const paginaDetalhada = (id) => {
    navigate(`/historicoDetalhado/${id}`);
}

  useEffect(() => {
    let hoje = new Date();

    let mesAtual = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;
    const dia = hoje.getDate()

    const ultimoDiaDoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).getDate();
    // const ultimoRegistro = historicoDespesas[historicoDespesas.length-1];
    // const mesUltimoRegistro = ultimoRegistro?.mes;


    const existeMes = historicoDespesas.some(item => item.mes === mesAtual);

    

    // if(!existeMes && dia === ultimoDiaDoMes){
    //   criarRegistroMes();
    // }

    // if(ultimoRegistro && ultimoRegistro.mes !== mesAtual && dia === 1){
    //   criarRegistroMes();
    // }

    if(!existeMes && (dia === ultimoDiaDoMes || dia === 1)){
      criarRegistroMes();
    }

    
   
  }, [despesas, metaGastos]);

  const criarRegistroMes = () => {
    const totalDespesasMes = despesas.reduce((total, despesa) => total + despesa.valor,0);
 const saldoMes = saldo - totalDespesasMes;
    const hoje = new Date();
    const mesAtual = `${hoje.getFullYear()}-${String(hoje.getMonth() + 1).padStart(2, "0")}`;


    const ultimasCincoDespesas = [...despesas].slice(0, 5).map((despesa) => ({
      nome: despesa.titulo,
      valor: despesa.valor,
      categoria: despesa.categoria,
      data: despesa.data
    }));

    const totalDespesas = despesas.reduce((total, despesa) => total + despesa.valor, 0);


    let registroMes = {
      id: Date.now(),
      mes: mesAtual,
      totalDespesas,
      saldo: saldoMes,
      meta: metaGastos,
      despesas: ultimasCincoDespesas,
      dataRegistro: hoje.toISOString()

    };

    const novoHistorico = [...historicoDespesas, registroMes];
    setHistoricoDespesas(novoHistorico);
    localStorage.setItem("historicoDespesas", JSON.stringify(novoHistorico));
    console.log("Historico atualizado do mes:", registroMes);
  }

  
  const nomeDoMes = (valor) => {
    if (!valor) return "Mês inválido";
  
    const partes = valor.split("-");
    if (partes.length < 2) return "Mês inválido";
  
    const mes = Number(partes[1]);  // pega só o número do mês
    const ano = partes[0];
  
    const nomes = [
      "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
      "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
  
    return `${nomes[mes - 1]} de ${ano}`;
  };
  


  const [mesEscolhido, setMesEscolhido] = useState("");
  const opMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];


  console.log("OLLLLLHA AQ O SAAAALLLDOOOOO:", saldo);

  return (
    <main>
      <Titulo>Historico</Titulo>
     <div className="containerGrafico">
     <GraficoBarra historicoDespesas={historicoDespesas} />
     </div>
      <button onClick={criarRegistroMes}>Forçar novo registro</button>
      <select name="categoria"
        className="selectPagFiltros"
        onChange={(event) => setMesEscolhido(event.target.value)} id="idcategoria" value={mesEscolhido} menuPlacement="bottom">
        <option value="">Selecione o tipo da despesa:</option>
        {opMes.map((opcao) => (
          <option key={opcao} value={opcao}>{opcao}</option>
        ))}
        {/* //parenteses no map, para não usar um return */}
      </select>



      {historicoDespesas.length === 0 ? (<p>Nenhum historico disponível ainda.</p>) : (
        <section className="listaHistorico">
          {historicoDespesas.map((item, id) => (
            <div className="itemHistorico" key={id}>
              <div id="divButton">
                <p>{nomeDoMes(item.mes)}</p>
                <Button className="buttonHistorico" onClick={()=>paginaDetalhada(item.id)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#626d00"><path d="m298-262-56-56 121-122H80v-80h283L242-642l56-56 218 218-218 218Zm222-18v-80h360v80H520Zm0-320v-80h360v80H520Zm120 160v-80h240v80H640Z"/></svg></Button>
              </div>
              <p><strong>Total:</strong> R$:{item.totalDespesas.toFixed(2)}</p>
              <p><strong>Meta:</strong> R$:{item.meta.toFixed(2)}</p>
              <p><small>Registrado em: {new Date(item.dataRegistro).toLocaleDateString("pt-BR")}</small></p>
              
            </div>
          ))}

        </section>
      )}
    </main>
  )
}

export default Historico;