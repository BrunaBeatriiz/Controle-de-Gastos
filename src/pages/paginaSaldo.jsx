import React, { useState } from "react";
import '../estilos/pagSaldo.css'
import '../estilos/despesas.css'
import TotalDespesas from "../components/totalDespesas";

import calculoSaldo from "../components/funçaoCalculoSaldo";

const Saldo = ({saldo, setSaldo,despesas}) => {
    const [nonoValor, setNovoValor]  = useState();

    const adicionarSaldo = (event) => {
        event.preventDefault();
        const valorConvertido = parseFloat(nonoValor) || 0;
        const saldoConvertido = parseFloat(saldo);
        setSaldo(saldoConvertido + valorConvertido);
        setNovoValor();
        
    }

    const calculoSaldoTotal = calculoSaldo(despesas, saldo);

    return(
        <main className="displaycolumn">
            <section className="form">
                <form
                action="" onSubmit={adicionarSaldo}>
                    <input
                    value={nonoValor}
                    onChange={(event) => setNovoValor(event.target.value)}
                    type="number" name="novoValor" id="id-novoValor" />
                    <button 
                    className="butAd"
                    type="submit">
                        Adicionar
                    </button>
                </form>
            </section>
            <section>
                <h3> Valor adicionado: {saldo.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h3>
                <TotalDespesas despesas={despesas}/>
                <h3>Saldo: {calculoSaldoTotal}</h3>
            </section>
        </main>

    )
    
}

export default Saldo;