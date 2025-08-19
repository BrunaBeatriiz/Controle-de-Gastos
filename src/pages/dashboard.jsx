import React from "react";
import { useNavigate } from "react-router-dom";
import Titulo from "../components/titulo";
import '../estilos/dashboard.css'
import calculoTotalDespesasPeriodoFixo from "../functions/funçaoSomaDespesas";
import { categoriaMaisGasta, proximaDespesa } from "../functions/funcoesCard";
import GraficoCategorias from "../components/graficoPizza";
import calculoSaldo from "../functions/funçaoCalculoSaldo";
import Button from "../components/button";



const Dashboard = ({ despesas, saldo }) => {
    const navigate = useNavigate();

    const irParaProxima = () => {
        navigate('/Despesas')
    }

    const paginaSaldo = () => {
        navigate('/Saldo');
    }

    const paginaTodasDespesas = () => {
        navigate('/paginaListaFiltros');
    }


    const totalDespesas = calculoTotalDespesasPeriodoFixo(despesas);
    const calculoSaldoTotal = calculoSaldo(despesas, saldo);

    const maiorGastoCategoria = categoriaMaisGasta(despesas);

    const proxima = proximaDespesa(despesas);


    return (
        <main>
            <Titulo>Painel Financeiro:</Titulo>
            <div className="displaycolumn">
                <section className="display-flex">
                    <h2>Saldo: {calculoSaldoTotal}</h2>
                    <Button className="button"
                        onClick={paginaSaldo}>
                        <p>
                            Adidiconar Saldo
                            <svg className="butProx" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="22px" fill="#ddfcc4"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </p>
                    </Button>
                    <Button className="button" onClick={irParaProxima}>
                        <p>
                            Adicionar despesas
                            <svg className="butProx" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="22px" fill="#ddfcc4"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </p>
                    </Button>

                    <Button className="button" onClick={paginaTodasDespesas}>
                        <p>
                            Despesas do Mês
                            <svg className="butProx" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="22px" fill="#ddfcc4"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </p>
                    </Button>
                </section>
                <section>
                    <div className="divGrafico">
                        <GraficoCategorias despesas={despesas} />
                    </div>
                </section>

            </div>
            <section className="div-flex">
                <div className="divCards">
                    <h4>Total despesas do mês:{totalDespesas} </h4>
                </div>
                <div className="divCards">
                    <h4>Gastador do mês: </h4> <br></br>
                    <p>{maiorGastoCategoria.categoria}</p><br></br>
                    <p>{maiorGastoCategoria.total.toFixed(2)}</p>
                </div>
                <div className="divCards">
                    <h4>Próximos vencimentos:</h4>
                    {proxima? (
                        <p>{proxima.titulo} - {new Date(proxima.data).toLocaleDateString("pt-BR")}</p>
                    ):(
                        <p>Não há despesas futuras</p>
                    )}
                </div>
                <div className="divCards">
                    <h4>Meta de Gastos</h4>
                </div>
            </section>

        </main>

    )
}

export default Dashboard;

// ideias h1: meu controle de gastos,painel financeiro, minhas finanças, visão geral de gastos;


// #626D00