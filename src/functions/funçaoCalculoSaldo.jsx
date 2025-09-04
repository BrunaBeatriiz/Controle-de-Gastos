import React from "react";
import calculoTotalDespesas from "./funçaoSomaDespesas";
import '../estilos/pagSaldo.css'

const calculoSaldo = (despesas, saldo) => {
    const totalDespesas = calculoTotalDespesas(despesas);
    const saldoNum = parseFloat(saldo);


    const valorSaldo = (saldoNum - totalDespesas);

    return (
        <h2 style={{color:"#f02400"}}> {valorSaldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </h2>
    )

}

export default calculoSaldo;