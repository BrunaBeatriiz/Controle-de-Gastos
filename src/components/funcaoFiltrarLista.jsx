import React from "react";

export default function filtrarLista(despesas,categoriaEscolhida, dataInicial, dataFinal){
    console.log("recibida as lista", despesas);
    const hoje = new Date();
    const umMesAtras = new Date();
    umMesAtras.setMonth(hoje.getMonth() - 1);

    const novaDataInicial = dataInicial? new Date (dataInicial):null;
    const novaDataFinal = dataFinal? new Date (dataFinal):null;

    return despesas.filter((despesa) => {
        const data = new Date(despesa.data);
        const resultadoIntervalo = novaDataInicial && novaDataFinal ?
        ( data >= novaDataInicial  && data <= novaDataFinal) : (data >= umMesAtras && data <= hoje);

        const resultadoFiltroCategoria = !categoriaEscolhida || despesa.categoria === categoriaEscolhida;

        return resultadoIntervalo && resultadoFiltroCategoria;

        console.log(resultadoIntervalo && resultadoFiltroCategoria)
    });

    
}
