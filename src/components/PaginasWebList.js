import PaginasWebFrame from "./PaginasWebFrame";
import { useState } from 'react';

const PaginasWebList = () => {
    
    const [paginaSeleccionada, setPaginaSeleccionada] = useState({})

    const lista = [
        {
            name: "La Solana",
            url: "https://lasolana.com.uy",
            id: 0
        },
        {
            name: "Sacco Films",
            url: "https://sacco.com.uy",
            id: 1
        },
        {
            name: "Nova Group",
            url: "https://uynova.com",
            id: 2
        },
        {
            name: "Vidrios de la costa",
            url: "https://vidriosdelacosta.com",
            id: 3
        },
        {
            name: "SIB",
            url: "https://sib.com.uy",
            id: 4
        }
    ]

    const handleWebsiteClick = (ev) => {
        setPaginaSeleccionada(lista[ev.target.id])
    }

    return (
        <div>
            <div className="frameListContainer">
                <ul className='list'>
                    {lista.map((pagina) => (
                        <li onClick={handleWebsiteClick} key={pagina.id} className={paginaSeleccionada.id === pagina.id ? 'active' : ''} id={pagina.id}>{pagina.name}</li>
                    ))}
                </ul>
                <div>
                    {Object.keys(paginaSeleccionada).length !== 0 ? (
                        <PaginasWebFrame pagina={paginaSeleccionada} />
                    ):(
                        <div className="texto_paginas_list">
                            <h3>Seleccione una pagina web para verla</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PaginasWebList;