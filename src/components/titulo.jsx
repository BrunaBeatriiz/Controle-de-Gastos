function Titulo(props) {
    return (
        <h1 className={`titulo ${props.className || 
        ""}`}>
            {props.children}
        </h1>
    )
}

export default Titulo;