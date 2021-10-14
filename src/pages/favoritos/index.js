import './style.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Favoritos() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFilmes(JSON.parse(minhaLista) || []);
    }, []);

    function excluirFilme(idFilme) {
        let filtroFilmes = filmes.filter((item) => {
            return (item.id !== idFilme)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('filmes', JSON.stringify(filtroFilmes));
    }

    return (
        <div className="fav">
            <h1>Meus filmes</h1>
            {filmes.length === 0 && <span>Você não possui nenhum filme salvo! :(</span>}
            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.nome}</span>

                            <div>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}