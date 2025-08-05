import React from "react"
import { useState } from "react";
import FormDespesas from "../components/formDespesas";
import TotalDespesas from "../components/totalDespesas";


const Despesas = () => {
    const [despesas, setDespesas] = useState([]);

    const emClickAdicionar = (titulo,valor,data,categoria) => {
        const novaDespesa = {
            id:despesas.length +1,
            titulo: titulo,
            valor:valor,
            data:data,
            categoria:categoria,
        }
        setDespesas([...despesas,novaDespesa]);

    }

    return(
        <main>
            <h1>Cadastro de Despesas:</h1>
            <FormDespesas emClickAdicionar={emClickAdicionar}/>

            
            <section>
                <h2>Lista de despesas:</h2>
                <ul id="lista">
                    {/* //usamos parenteses para dizer que é um retorno automatico (explicito). */}
                    {despesas.map((despesa) => (
                        <li key={despesa.id}>
                            <p>{despesa.titulo}</p>
                            <p>{despesa.valor}</p>
                            <p>{new Date(despesa.data).toLocaleDateString('pt-BR')}</p>
                            <p>{despesa.categoria}</p>
                        </li>
                    ))}
                </ul>
                <TotalDespesas despesas={despesas}/>
            </section>
        </main>
    )
   

}


export default Despesas;