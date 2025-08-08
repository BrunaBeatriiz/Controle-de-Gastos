import React from "react";
import ListaDespesas from "../components/listaDespesas";
import filtrarLista from "../components/funcaoFiltrarLista";
import { useState } from "react";
import '../estilos/mostrarLista.css';
import { useMemo } from "react";


const MostrarListaFiltros = ({despesas}) => {

    const [categoriaEscolhida,setCategoriaEscolhida] = useState("");

    const opDespesas = ["Moradia","Alimentação","Transporte","Saúde","Educação","Contas","Lazer","Pessoal","Outros"];


    const mostrarUltimoMes = filtrarLista(despesas);

    const despesasFiltradas = useMemo(() => {
        return filtrarLista(despesas,categoriaEscolhida);
    },[despesas, categoriaEscolhida]);

    return(
        <main>
              <select name="categoria"
              onChange={(event) => setCategoriaEscolhida(event.target.value)} id="idcategoria" value={categoriaEscolhida} >
                    <option value="">Selecione o tipo da despesa:</option>
                    {opDespesas.map((opcao) => (
                        <option key={opcao} value={opcao}>{opcao}</option>
                    ))}
                    {/* //parenteses no map, para não usar um return */}
                </select>
              <ListaDespesas despesas={categoriaEscolhida? despesasFiltradas : mostrarUltimoMes}/>
        </main>
    )
}

export default MostrarListaFiltros;