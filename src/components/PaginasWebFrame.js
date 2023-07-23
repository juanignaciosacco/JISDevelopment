import { useEffect, useState } from "react";

const PaginasWebFrame = ({ pagina }) => {

    const [paginaW, setPaginaW] = useState({})

    useEffect(() => {
        setPaginaW(pagina)
    },[pagina])


    return (
        <div className='frames'>
            <h2>{paginaW.name}</h2>
            <iframe src={paginaW.url} title={paginaW.name}/>
        </div>
    )
}

export default PaginasWebFrame;