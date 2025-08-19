import React from "react";
import ListaDespesas from "../components/listaDespesas";

const TodasDespesas = ({ despesas, emClickExcluirDespesa }) => {

    return (
        <main>
            <ListaDespesas despesas={despesas} emClickExcluirDespesa={emClickExcluirDespesa} />
        </main>
    )
}

export default TodasDespesas;



