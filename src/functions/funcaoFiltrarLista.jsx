export default function filtrarLista(despesas, categoriaEscolhida, dataInicial, dataFinal) {
    console.log("recibida as lista", despesas);
    const hoje = new Date();
    const umMesAtras = new Date();
    umMesAtras.setMonth(hoje.getMonth() - 1);

    const novaDataInicial = dataInicial ? new Date(dataInicial) : umMesAtras;
    const novaDataFinal = dataFinal ? new Date(dataFinal) : hoje;

    return despesas.filter((despesa) => {
        const data = new Date(despesa.data);
        const resultadoIntervalo = data >= novaDataInicial && data <= novaDataFinal;

        const resultadoFiltroCategoria = !categoriaEscolhida || despesa.categoria === categoriaEscolhida;

        return resultadoIntervalo && resultadoFiltroCategoria;

       
    });

}
