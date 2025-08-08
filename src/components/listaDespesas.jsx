import React from "react";

//o valor padrão da prop sempre sera um array vazio, as vezes a prop não é passado ou está indisponivel no momento da renderização.
const ListaDespesas = ({ despesas =[], resumida = false }) => {
    if (despesas.length === 0) {
        return <p>Nenhuma despesa encontrada.</p>;
    }

    return (
        <ul id="lista">
            {/* //usamos parenteses para dizer que é um retorno automatico (explicito). */}
            {despesas.map((despesa) => (
                <li key={despesa.id}>
                    <p>{despesa.titulo.toUpperCase()}</p>
                    <p>R$:{despesa.valor}</p>
                    { !resumida && (
                        <>
                    <p>{new Date(despesa.data).toLocaleDateString('pt-BR')}</p>
                    <p>{despesa.categoria}</p>
                    </>
                    )}
                </li>
            ))}
        </ul>
    )
}

export default ListaDespesas;