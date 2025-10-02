import React from "react";
import ListaDespesas from "../components/listaDespesas";
import filtrarLista from "../functions/funcaoFiltrarLista";
import { useState } from "react";
import '../estilos/mostrarLista.css';
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";


const MostrarListaFiltros = ({ despesas, emClickExcluirDespesa }) => {
    const navigate = useNavigate();

    const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
    const [dataInicial, setDataInicial] = useState("");
    const [dataFinal, setDataFinal] = useState("");

    const opDespesas = ["Moradia", "Alimentação", "Transporte", "Saúde", "Educação", "Contas", "Lazer", "Pessoal", "Outros"];

    const voltarPagina = () => {
        navigate('/Despesas')
    }
    const paginaTodasDespesas = () => {
        navigate('/todasDespesas')
    }
    const paginaPrincipal = () => {
        navigate('/')
    }


    const mostrarUltimoMes = filtrarLista(despesas);

    const despesasFiltradas = useMemo(() => {
        console.log(dataInicial);
        console.log(dataFinal);
        return filtrarLista(despesas, categoriaEscolhida, dataInicial, dataFinal);
    }, [despesas, categoriaEscolhida, dataInicial, dataFinal]);

    return (
            <main className="mainLista">
                <div className="divInputs">
                    <Button className="buttonVoltar"
                        onClick={voltarPagina}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#626d00"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></Button>
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
                <ListaDespesas despesas={categoriaEscolhida ? despesasFiltradas : mostrarUltimoMes} emClickExcluirDespesa={emClickExcluirDespesa} />
                <footer>
                    <Button
                    className="button marginLeft"
                     onClick={paginaTodasDespesas}>Exibir Todas Despesas</Button>
                </footer>
            </main>
    )
}

export default MostrarListaFiltros;

// "incluir somente despesas que estejam dentro do intervalo de datas E que sejam da categoria filtrada (ou sem filtro de categoria)"


/*
  Fluxo de dados em múltiplos componentes:

  1. O componente Pai mantém o estado principal (ex: lista de despesas) e as funções para alterar esse estado (ex: excluir despesa).

  2. O componente filho (ex: página com filtros) recebe o estado e as funções via props, aplica filtros e lógica de negócio.

  3. O componente neto (ex: componente que apenas renderiza a lista) recebe os dados já filtrados e a função de exclusão via props.

  4. Para alterar o estado no Pai, o componente neto chama a função passada via props, que atualiza o estado no Pai.

  5. Assim, o fluxo é unidirecional e garante que o estado fique centralizado, mantendo a consistência em toda a aplicação.
*/

// const navigate = useNavigate();

// const [categoriaEscolhida, setCategoriaEscolhida] = useState("");
// const [dataInicial, setDataInicial] = useState("");
// const [dataFinal, setDataFinal] = useState("");

// const opDespesas = ["Moradia", "Alimentação", "Transporte", "Saúde", "Educação", "Contas", "Lazer", "Pessoal", "Outros"];

// const voltarPagina = () => {
//     navigate('/Despesas')
// }
// const paginaTodasDespesas = () => {
//     navigate('/todasDespesas')
// }
// const paginaPrincipal = () => {
//     navigate('/')
// }


// const mostrarUltimoMes = filtrarLista(despesas);

// const despesasFiltradas = useMemo(() => {
//     console.log(dataInicial);
//     console.log(dataFinal);
//     return filtrarLista(despesas, categoriaEscolhida, dataInicial, dataFinal);
// }, [despesas, categoriaEscolhida, dataInicial, dataFinal]);

// return (
//         <main className="mainLista">
//             <div className="divInputs">
//                 <Button className="buttonVoltar"
//                     onClick={voltarPagina}><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="24px" fill="#626d00"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg></Button>
//                 <select name="categoria"
//                     className="selectPagFiltros"
//                     onChange={(event) => setCategoriaEscolhida(event.target.value)} id="idcategoria" value={categoriaEscolhida} >
//                     <option value="">Selecione o tipo da despesa:</option>
//                     {opDespesas.map((opcao) => (
//                         <option key={opcao} value={opcao}>{opcao}</option>
//                     ))}
//                     {/* //parenteses no map, para não usar um return */}
//                 </select>
//                 <input type="date"
//                     name="data"
//                     id="dataInicial"
//                     value={dataInicial}
//                     onChange={(event) => setDataInicial(event.target.value)} />
//                 <input type="date"
//                     name="data"
//                     id="dataFinal"
//                     value={dataFinal}
//                     onChange={(event) => setDataFinal(event.target.value)} />
//             </div>
//             <ListaDespesas despesas={categoriaEscolhida ? despesasFiltradas : mostrarUltimoMes} emClickExcluirDespesa={emClickExcluirDespesa} />
//             <footer>
//                 <Button
//                 className="button"
//                  onClick={paginaTodasDespesas}>Exibir Todas Despesas</Button>
//                  <Button
//                 className="butHome"
//                 onClick={paginaPrincipal}
//                 >
//                 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="21px" fill="#626d00"
//                     ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
//                 </Button>
//             </footer>
//         </main>
// )