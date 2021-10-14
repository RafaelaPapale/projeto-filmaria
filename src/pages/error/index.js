import './style.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div className="error">
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Retorne para a página inicial</Link>
        </div>
    )
}