import React from "react";

const calculoTotalDespesasPeriodoFixo = (despesas) => {
    const hoje = new Date();
    let dataInicial, dataFinal;

    if(hoje.getDate){
        dataInicial = new Date(hoje.getFullYear(), hoje.getMonth(),10);
        dataFinal = new Date(hoje.getFullYear(), hoje.getMonth() + 1,10);

    }else{
        dataInicial = new Date(hoje.getFullYear(), hoje.getMonth() -1,10);
        dataFinal = new Date(hoje.getFullYear(), hoje.getMonth(),10);
    }


    return despesas.filter(despesa=> {
        const dataDespesa = new Date(despesa.data);

        return dataDespesa >= dataInicial && dataDespesa < dataFinal;

    }).reduce((acc,despesa)=> acc + parseFloat(despesa.valor || 0),0);

    // return despesas.reduce((acc, despesa) => acc + parseFloat(despesa.valor || 0),0);

  
}

export default calculoTotalDespesasPeriodoFixo;
