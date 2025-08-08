import React from "react";
import { useNavigate } from "react-router-dom";
import Despesas from "./Despesas";

const Dashboard = () => {
    const navigate = useNavigate();

    const irParaProxima  = () => {
        navigate('/Despesas')
    } 

    return(
        <button onClick={irParaProxima}>pagina Despesas</button>
    )
}

export default Dashboard;