import React from "react";
import { useNavigate } from "react-router-dom";
import Titulo from "../components/titulo";
import '../estilos/dashboard.css'
import calculoTotalDespesasPeriodoFixo from "../functions/funçaoSomaDespesas";
import { categoriaMaisGasta, proximaDespesa } from "../functions/funcoesCard";
import GraficoCategorias from "../components/graficoPizza";
import calculoSaldo from "../functions/funçaoCalculoSaldo";
import Button from "../components/button";



const Dashboard = ({ despesas, saldo, metaGastos }) => {
    const navigate = useNavigate();

    const irParaProxima = () => {
        navigate('/Despesas')
    }

    const paginaSaldo = () => {
        navigate('/Saldo');
    }

    const paginaDespesasFiltros = () => {
        navigate('/paginaListaFiltros');
    }
    const paginaHistorico = () => {
        navigate('/historico');
    }


    const totalDespesas = calculoTotalDespesasPeriodoFixo(despesas);


    const resultadosMetas = (metaGastos||0) - calculoTotalDespesasPeriodoFixo(despesas);
    console.log("resultados", resultadosMetas);
    const metaPorcento = metaGastos > 0? ((totalDespesas/metaGastos) * 100).toFixed(1):0;

    const calculoSaldoTotal = calculoSaldo(despesas, saldo);

    const maiorGastoCategoria = categoriaMaisGasta(despesas);

    const proxima = proximaDespesa(despesas);
    


    return (
        <main>
            <Titulo>Painel Financeiro:</Titulo>
            <div className="display-column">
                <section className="display-flex">
                    <h2><p className="marginP">Saldo:</p> {calculoSaldoTotal}</h2>
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

                    <Button className="button" onClick={paginaDespesasFiltros}>
                        <p>
                            Despesas do Mês
                            <svg className="butProx" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="22px" fill="#ddfcc4"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </p>
                    </Button>
                    <Button className="button" onClick={paginaHistorico}>
                        <p>
                            Historico de Gastos
                            <svg className="butProx" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="22px" fill="#ddfcc4"><path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                        </p>
                    </Button>
                </section>
                <section className="secGrafico">
                    <h2 className="h2Grafico">Disposição das despesas:</h2>
                    <div className="divGrafico">
                        <GraficoCategorias despesas={despesas} />
                    </div>
                </section>

            </div>
            <section className="div-flex">
                <div className="divCards">
                    <h3>Total despesas do mês: 
                    <p className="margin">{totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></h3>
                </div>
                <div className="divCards">
                    <h3>Gastador do mês: </h3>
                    <p>{maiorGastoCategoria.categoria}</p>
                    <p>{maiorGastoCategoria.total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                </div>
                <div className="divCards">
                    <h3>Próximos vencimentos:</h3>
                    {proxima? (
                        <p>{proxima.titulo} - {new Date(proxima.data).toLocaleDateString("pt-BR")}<br/>{proxima.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    ):(
                        <p>Não há despesas futuras</p>
                    )}
                </div>
                <div className="divCards">
                    <h3 className="marginH3">Meta de Gastos:</h3>
                    <p className="fontSize">{resultadosMetas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} restantes.</p>
                    <p className="fontSize">{metaPorcento}% foi atingida.</p>
                </div>
            </section>

        </main>

    )
}

export default Dashboard;

// ideias h1: meu controle de gastos,painel financeiro, minhas finanças, visão geral de gastos;


// #626D00