import { useNavigate } from "react-router-dom";
import * as c from './styles'

export const NotFoundPage = () => {
    const navigate = useNavigate();
    
    return (
        <c.Container>
            <h1>Página não encontrada</h1>
            <p>Está página não existe ou está fora do ar</p>
            <button onClick={e => navigate('/')} >Página inicial</button>
        </c.Container>
    );
};