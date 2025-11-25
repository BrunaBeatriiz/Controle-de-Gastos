import { useParams } from "react-router-dom";
import Titulo from "../components/titulo";
import '../estilos/historico.css'

const HistoricoDetalhado = () => {
    const {id} = useParams();
    console.log("id url",id);

    const historico = JSON.parse(localStorage.getItem("historicoDespesas")) || [];
    console.log("olha aq:",historico);

    const despesaId = historico.find((mes) => mes.id == id);
    console.log("olha a despesa id",despesaId);


    const mes = (data) => {

        if(!data){
            return "Mês inválido!";
        }

        
        const mesAno = data.split("-");
        const mes = Number(mesAno[1]);
        console.log("mesdoanoaq",mesAno,
        "olha p mes aq",mes);

        if(mes.length < 2){
            return "Mês inválido!"
        }

        const nomes = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
          ];

          return `${nomes[mes - 1]} de ${mesAno[0]}`
    }




        return(
            <main className="historico">
                <Titulo>Despesas</Titulo>
                <div className="divHistoricoDetalhado">
                    <h2>{mes(despesaId.mes)}</h2>
                    <p>Total das despesas do mês:
                    {despesaId.totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p>Meta de gastos do mês: {despesaId.meta.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <p>Saldo no mês: {despesaId.saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    <ul className="grid">{despesaId.despesas.map((despesa, index) => (
                        <li className="divCardGrid" key={index}>
                            <p>Titulo: {despesa.nome}</p>
                            <p>Valor: {despesa.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            <p>Natureza: {despesa.categoria}</p>
                        </li>
                    ))}</ul>
                </div>
            </main>
        )
    }


export default HistoricoDetalhado;