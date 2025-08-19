import React from "react";
import calculoTotalDespesasPeriodoFixo from "./funçaoSomaDespesas";

const TotalDespesas = ({ despesas }) => {
    const totalDespesas = calculoTotalDespesasPeriodoFixo(despesas);

    return (
        <h2>Total das despesas:<br />
            R$: {totalDespesas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </h2>
    )


}

export default TotalDespesas;

