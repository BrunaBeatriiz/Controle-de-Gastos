import React from "react";
import calculoTotalDespesasPeriodoFixo from "./funçaoSomaDespesas";

const TotalDespesas = ({despesas}) => {
    const totalDespesas = calculoTotalDespesasPeriodoFixo(despesas);

    return(
    <h3>Total das despesas:<br/>
    R$: {totalDespesas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
)

  
}

export default TotalDespesas;

