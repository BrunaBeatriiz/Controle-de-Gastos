import React from "react";
import Despesas from "../pages/Despesas";

const TotalDespesas = ({despesas}) => {
    const total = despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valor),0);

    return(
        <h3>Total Despesas:<br/>
        R$: {total.toFixed(2)}</h3>
    )
}

export default TotalDespesas;