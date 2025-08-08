import React from "react";

export default function filtrarLista(despesas,categoriaEscolhida){
    console.log("recibida as lista", despesas);
    const hoje = new Date();
    const umMesAtras = new Date();
    umMesAtras.setMonth(hoje.getMonth() - 1);

    return despesas.filter((despesa) => {
        const data = new Date(despesa.data);
        return data >= umMesAtras && data <= hoje;
    });


    const resultadoFiltrarCategoria = despesas.filter((despesa) => {
        if(!categoriaEscolhida){
            return true; 
            //sem categoria escolhida ele retornara tudo;
        }
        return despesa.categoria === categoriaEscolhida;
    })
}
