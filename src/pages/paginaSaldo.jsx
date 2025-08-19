import React, { useState } from "react";
import '../estilos/pagSaldo.css'
import '../estilos/despesas.css'
import TotalDespesas from "../functions/totalDespesas";
import Titulo from "../components/titulo";
import Button from "../components/button";
import calculoSaldo from "../functions/funçaoCalculoSaldo";

const Saldo = ({ saldo, setSaldo, despesas }) => {
    const [nonoValor, setNovoValor] = useState();

    const adicionarSaldo = (event) => {
        event.preventDefault();
        const valorConvertido = parseFloat(nonoValor) || 0;
        const saldoConvertido = parseFloat(saldo);
        setSaldo(saldoConvertido + valorConvertido);
        setNovoValor();

    }

    const calculoSaldoTotal = calculoSaldo(despesas, saldo);

    return (
        <main>
            <header>
                <button className="butHome">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="21px" fill="#626d00"
                    ><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" /></svg>
                </button>
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
                    <h2> Valor adicionado: {saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h2>
                    <TotalDespesas despesas={despesas} />
                    <h2>Saldo: {calculoSaldoTotal}</h2>
                </section>
            </div>
        </main>

    )

}

export default Saldo;