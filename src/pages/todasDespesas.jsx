import React from "react";
import Button from "../components/button";
import ListaDespesas from "../components/listaDespesas";
import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import filtrarLista from "../functions/funcaoFiltrarLista";

const TodasDespesas = ({ despesas, emClickExcluirDespesa }) => {
    const navigate = useNavigate();
    const paginaPrincipal = () => {
        navigate('/')
    }
    const paginaListaUmtimoMes = () => {
        navigate('/paginaListaFiltros')
    }
    const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
    const opDespesas = ["Moradia", "Alimentação", "Transporte", "Saúde", "Educação", "Contas", "Lazer", "Pessoal", "Outros"];

    const despesasFiltradas = useMemo(() => {
        // console.log(dataInicial);
        // console.log(dataFinal);
        return filtrarLista(despesas, categoriaEscolhida);
    }, [despesas, categoriaEscolhida]);


    return (
        <main>
            <div className="divInputs">
                <Button className="buttonVoltar"
                    onClick={paginaListaUmtimoMes}
                    ><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#626d00"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></Button>
                <select name="categoria"
                    className="selectPagFiltros"
                    onChange={(event) => setCategoriaEscolhida(event.target.value)} id="idcategoria" value={categoriaEscolhida} >
                    <option value="">Selecione o tipo da despesa:</option>
                    {opDespesas.map((opcao) => (
                        <option key={opcao} value={opcao}>{opcao}</option>
                    ))}
                    {/* //parenteses no map, para não usar um return */}
                </select>
                <Button
                    className="buttonVoltar padding"
                    onClick={paginaPrincipal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="21px" fill="#626d00"
                    ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                </Button>
            </div>

            <ListaDespesas despesas={categoriaEscolhida? despesasFiltradas : despesas} emClickExcluirDespesa={emClickExcluirDespesa} />
        </main>
    )
}

export default TodasDespesas;



