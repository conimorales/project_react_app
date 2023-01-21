import ComponenteContenedor_ from "./Componente";





const Titulo = ({titulo = 'Titulo', subtitulo= 'Subtitulo'}) => {
    return (
        <>
        <h2>{titulo}</h2>
        {/* <h3>{subtitulo}</h3> */}
        </>

    );
}



function App() {
    const tituloApp='Hola'

    return (
        <>
            <Titulo
                titulo = {tituloApp}
                // subtitulo= 'Esta es mi web'
            />

            <ComponenteContenedor_ saludo = 'Constanza Morales'/>
        </>
    )
    ;
}

export default App;



