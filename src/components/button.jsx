import React from "react";

const Button = ({ onClick, className, children, type = "button" }) => {

    return (
        <button onClick={onClick} className={className} type={type}>{children}</button>
    )
}


export default Button;


// O 'type' do componente Button define o tipo do botão HTML:
// - 'button' (padrão) → botão comum que só dispara onClick
// - 'submit' → envia o formulário
// - 'reset' → reseta os campos do formulário
// Passar type como prop permite reutilizar o componente de forma segura.


// P: Qual é o tipo padrão do Button e o que acontece se eu passar outro tipo?
// R: O padrão do Button é "button" (botão comum que só dispara onClick).
//    Se você passar outro valor via prop, como "submit" ou "reset", ele substitui o padrão
//    e o navegador interpreta o atributo HTML 'type' de acordo com a prop recebida.
//
// Exemplos:
// <Button>Normal</Button>               // type = "button" (padrão)
// <Button type="submit">Enviar</Button> // type = "submit"
