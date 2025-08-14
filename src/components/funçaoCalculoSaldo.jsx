import React from "react";
import calculoTotalDespesas from "./funçaoSomaDespesas";

const calculoSaldo = (despesas,saldo) => {
    const totalDespesas = calculoTotalDespesas(despesas);
     const saldoNum = parseFloat(saldo);

    return saldoNum - totalDespesas;

}

export default calculoSaldo;