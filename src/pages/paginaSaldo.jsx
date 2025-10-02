import React, { useState,useEffect } from "react";
import '../estilos/pagSaldo.css'
import '../estilos/despesas.css'
import TotalDespesas from "../functions/totalDespesas";
import Titulo from "../components/titulo";
import Button from "../components/button";
import calculoSaldo from "../functions/funçaoCalculoSaldo";
import { useActionData, useNavigate } from "react-router-dom";
import { calculoMeta } from "../functions/funcoesCard";

const Saldo = ({ saldo, setSaldo, despesas, metaGastos, setMetaGastos }) => {
    const [nonoValor, setNovoValor] = useState("");
    const [nonoValorMeta, setNovoValorMeta] = useState("");
    const [erro, setErro] = useState("");
    const[sucesso, setSucesso] = useState("");

    function mostrarErro(msg) {
        setErro(msg);
        setSucesso(false);
        setTimeout(() => setErro(""), 3000);
      }
      
      function mostrarSucesso() {
        setErro("");
        setSucesso(true);
        setTimeout(() => setSucesso(false), 3000);
      }
      
    

    const navigate = useNavigate();

    const adicionarSaldo = (event) => {
        event.preventDefault();
        const valorConvertido = parseFloat(nonoValor) || 0;
        const saldoConvertido = parseFloat(saldo);
        setSaldo(saldoConvertido + valorConvertido);
        setNovoValor("");

    }
    const adicionarMeta = (event) => {
        event.preventDefault();
        const MetaConvertido = parseFloat(nonoValorMeta) || 0;
        // console.log("Valor digitado",nonoValorMeta, "convertido", MetaConvertido, "saldo", metaGastos);
        if(!nonoValorMeta.trim()){
            setErro("Digite um valor para a meta.");
            return;
        }

        if(isNaN(MetaConvertido)){
            setErro("O valor digitado não é válido.")
            return;
        }

        if(MetaConvertido <= 0){
            setErro("A meta precisa ser maior que zero.")
        }

        // setMetaGastos(MetaConvertido)
        // setNovoValorMeta("");
        // setErro("")
        // setSucesso(true);

        // setTimeout(() => setSucesso(false),3000);
        // setTimeout(() => setErro(""), 3000);
        // return;

        setMetaGastos(MetaConvertido);
        setNovoValorMeta("");
        mostrarSucesso();

        

    }



    const calculoSaldoTotal = calculoSaldo(despesas, saldo);
 
    const meta = calculoMeta(despesas,metaGastos);
 
    function paginaPrincipal() {
        navigate('/')
    }

    return (
        <main>
            <header>
                <Button
                    className="butHome"
                    onClick={paginaPrincipal}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="21px" fill="#626d00"
                    ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                </Button>
                <Titulo style={{ width: '80vw !important' }}>Meu Saldo:</Titulo>
            </header>
            <div className="displaycolumn">
                <section className="form">
                    <h3>Adicione um novo valor ao seu saldo:</h3>
                    <form
                        action="" onSubmit={adicionarSaldo}>
                        <input
                            placeholder="Digite o valor:"
                            value={nonoValor}
                            onChange={(event) => setNovoValor(event.target.value)}
                            type="number" name="novoValor" id="id-novoValor" />
                        <Button className="button"
                            type="submit" >
                            Adicionar
                        </Button>
                    </form>
                    <div className="divMeta">
                        <h3>Adicionar meta de gastos:</h3>
                        <form className="formMeta"
                        action="" onSubmit={adicionarMeta}>
                        <input
                            placeholder="Digite o valor da meta:"
                            value={nonoValorMeta}
                            onChange={(event) => setNovoValorMeta(event.target.value)}
                            type="number" name="novoValor" id="id-novoValor" />
                        <Button className="button"
                            type="submit" >
                            Adicionar
                        </Button>
                    </form>
                    {erro && <p style={{color: "rgb(226, 15, 0)", fontSize: "0.8em", marginLeft: "7px", textShadow: "1px 1px 2px #53720a83"}}>{erro}</p>}{sucesso && (<p style={{color:"#53720a", fontSize: "0.8em", marginLeft: "7px", textShadow: "1px 1px 2px #53720a83"}}>Meta de gastos adicionado com sucesso!</p>)}
                    </div>
                </section>
                <section>
                    <div className="divCard">
                        <h2> Valor adicionado: </h2>
                        <p>{saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                    </div>
                    <div className="divCard">
                        <TotalDespesas despesas={despesas} />
                    </div>
                    <div className="divCard">
                        <h2>Saldo: </h2>
                        <p className="textoSaldo" style={{ marginTop: "-10px", marginLeft: "-1px" }}>{calculoSaldoTotal}</p>
                    </div>
                    <div className="divCard">
                        <h2>Valor meta de gastos: </h2>
                        <p className="textoSaldo">
                        {metaGastos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                        </p>
                    </div>
                </section>
            </div>
        </main>

    )

}

export default Saldo;