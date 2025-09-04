import React from "react"
import { useMemo } from "react";
import FormDespesas from "../components/formDespesas";
import TotalDespesas from "../functions/totalDespesas";
import '../estilos/index.css';
import'../estilos/despesas.css';
import Titulo from "../components/titulo";
import ListaDespesas from "../components/listaDespesas";
import filtrarLista from "../functions/funcaoFiltrarLista";
import { useNavigate } from "react-router-dom";
import Button from "../components/button";


const Despesas = ({despesas, setDespesas}) => {

    const navigate = useNavigate();

    const emClickAdicionar = (titulo,valor,data,categoria) => {
        const novaDespesa = {
            id:despesas.length +1,
            titulo: titulo,
            valor:parseFloat(valor),
            data:data,
            categoria:categoria,
        }
        console.log("Adicionandos:",novaDespesa )
        setDespesas([...despesas,novaDespesa]);

    }

    const mostrarUltimoMes = useMemo(() => {
        const resultado = filtrarLista(despesas);
        console.log("filtradas:", resultado);
        return resultado;
    },[despesas]);

    const ultimasCinco = useMemo(() => {
        return mostrarUltimoMes.slice(-5);
    },[mostrarUltimoMes])
    // const ultimasCinco = despesas.slice(-5);

    const verMais = () => {
        navigate("/paginaListaFiltros");
    }


    const paginaPrincipal = () =>{
        navigate('/')
    }


    return(
        <main>
             <header>
                    <Button
                     className="butHome"
                     onClick={paginaPrincipal}
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="21px" fill="#626d00"
                        ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                    </Button>
                             <Titulo>Cadastrar Despesas:</Titulo>
             </header>
            <div className="displaycolumn">
                <FormDespesas emClickAdicionar={emClickAdicionar}/>
                
                <section>
                    <h2>Lista de despesas:</h2>

                    <Button className="buttonForm" onClick={verMais}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m298-262-56-56 121-122H80v-80h283L242-642l56-56 218 218-218 218Zm222-18v-80h360v80H520Zm0-320v-80h360v80H520Zm120 160v-80h240v80H640Z"/></svg>
                    </Button>

                    
                   <ListaDespesas despesas={ultimasCinco} resumida={true}/>
                    <TotalDespesas despesas={despesas}/>
                </section>
            </div>
        </main>
    )
   

}


export default Despesas;