import './style.css';
import { useParams, useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import api from '../../services/api'

export default function Filme() {
    const { id } = useParams();
    const history = useHistory();
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme() {
            const response = await api.get(`r-api/?api=filmes/${id}`);

            if (response.data.length === 0) {
                history.replace('/')
                return;
            }

            //console.log(response);
            setFilme(response.data);
            setLoading(false);
        }

        loadFilme();

        return () => {
            console.log("Componente desmontado...")
        }

    }, [id, history]);

    if (loading) {
        return (
            <div className="filme-info">
                <h1>Carregando seu filme...</h1>
            </div>
        );
    }

    function salvaFilme() {
        const minhaLista = localStorage.getItem('filmes');
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id);

        if (hasFilme) {
            alert('Você já possui esse filme salvo!')
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        alert('Filme salvo com sucesso!')
        return;
    }

    return (
        <div className="filme-info">
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome} />

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={salvaFilme}>Salvar</button>
                <button>
                    <a target="blank" href={`https://www.youtube.com/results?search_query=${filme.nome}+Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    );
}