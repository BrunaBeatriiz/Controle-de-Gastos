import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"


ChartJS.register(ArcElement, Tooltip, Legend);

const GraficoCategorias = ({ despesas }) => {
    const somaPorCategoria = despesas.reduce((acc, despesa) => {
        const categoria = despesa.categoria || "Sem categoria";
        acc[categoria] = (acc[categoria] || 0) + parseFloat(despesa.valor);
        return acc;
    }, {});

    const coresIntensas = [
        "#2F5261", // Azul petróleo
        "#A3BBC8", // Azul suave mais vivo
        "#6C9B8B", // Verde médio
        "#7B8F00", // Verde oliva mais vivo
        "#E79F70", // Laranja queimado
        "#66C49E", // Verde menta mais intenso
        "#F1A3B8", // Rosa vibrante
        "#D1B59C", // Bege médio
        "#8F7BA3"  // Lavanda suave mais forte
    ];




    const data = {
        labels: Object.keys(somaPorCategoria),
        datasets: [
            {
                label: "Gastos por categoria",
                data: Object.values(somaPorCategoria),
                backgroundColor: coresIntensas,
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const valor = context.raw;
                        return `${context.label}: R$ ${valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
                    },
                },
            },
            legend: {
                position: "bottom",
            },
        },
    };

    return <Pie data={data} options={options} />

};

export default GraficoCategorias;