import React, { useState } from "react";
import '../estilos/pagSaldo.css'
import '../estilos/despesas.css'
import TotalDespesas from "../functions/totalDespesas";
import Titulo from "../components/titulo";
import Button from "../components/button";
import calculoSaldo from "../functions/funçaoCalculoSaldo";
import { useNavigate } from "react-router-dom";

const Saldo = ({ saldo, setSaldo, despesas }) => {
    const [nonoValor, setNovoValor] = useState();
    const navigate = useNavigate();

    const adicionarSaldo = (event) => {
        event.preventDefault();
        const valorConvertido = parseFloat(nonoValor) || 0;
        const saldoConvertido = parseFloat(saldo);
        setSaldo(saldoConvertido + valorConvertido);
        setNovoValor();

    }

    const calculoSaldoTotal = calculoSaldo(despesas, saldo);

    function paginaPrincipal (){
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
                        <p className="textoSaldo">{calculoSaldoTotal}</p>
                    </div>
                </section>
            </div>
        </main>

    )

}

export default Saldo;