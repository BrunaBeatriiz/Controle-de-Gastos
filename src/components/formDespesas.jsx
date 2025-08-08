import React, { useState } from "react";
import Titulo from "./titulo";

const FormDespesas = ({emClickAdicionar}) => {
    const [titulo, setTitulo] = useState("");
    const [valor, setValor] = useState("");
    const [data, setData] = useState("");
    const [categoria,setCategoria] = useState("");

    const opDespesas = ["Moradia","Alimentação","Transporte","Saúde","Educação","Contas","Lazer","Pessoal","Outros"];

    const escolha  = (event) => {
    setCategoria(event.target.value);
    //atualiza a categoria escolhida
    }
    const handleSubmit = (event) => {
        event.preventDefault();
                if(!titulo.trim()||!valor.trim()){
                    return alert("Preencha o título e o valor da despesa.");
                }

                if(!data){
                    return alert("Selecione uma data.")
                }

                const dataObj = new Date(data);
                const hoje = new Date();
                const doisAnos = new Date ();
                doisAnos.setFullYear(hoje.getFullYear() -2);

                if( dataObj < doisAnos){
                    return alert("A data selecionada deve ser de no máximo dois anos atrás.")
                }
                if(!categoria){
                    return alert("Selecione uma categoria.")
                }

                emClickAdicionar(titulo,valor,data,categoria);

                setTitulo("");
                setValor("");
                setData("");
                setCategoria("");
    }

    return (
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <input
                type="text" name="titulo" id="idtitulo"
                value={titulo}
                placeholder="Digite o nome da despesa:"
                onChange={(event) => setTitulo(event.target.value)} />
                <input type="date" 
                name="data" id="id-data"
                value={data}
                onChange={(event) => setData(event.target.value)}
                 />
                <select name="categoria" id="idcategoria" value={categoria} onChange={escolha}>
                    <option value="">Selecione o tipo da despesa:</option>
                    {opDespesas.map((opcao) => (
                        <option key={opcao} value={opcao}>{opcao}</option>
                    ))}
                    {/* //parenteses no map, para não usar um return */}
                </select>
                <input type="number" 
                name="valor" id="idvalor"
                value={valor} 
                placeholder="Digite o valor da despesa:"
                onChange={(event) => setValor(event.target.value)}
                min="0"
                step="0.01"/>
              <button className="butAd" type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default FormDespesas;