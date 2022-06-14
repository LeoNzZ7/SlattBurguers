import * as c from './styles';
import burgue from '../../assets/burgue2.png';
import { useNavigate } from 'react-router-dom';

export const Ingredients = () => {
    const navigate = useNavigate();
    
    return (
        <c.Container>
            <c.imageArea>
                <img src={burgue} />
            </c.imageArea>
            <c.infoArea>
                <h1>Com o que são feitos?</h1>
                <ul>
                    <li>
                        <h1>Hambúrgueres</h1>
                        <p>Hambúrgueres feitos com carne de primeira sendo 80% carne e 20% gordura</p>
                    </li>
                    <li>
                        <h1>Vegetais</h1>
                        <p>Todos os vegetais usados em nossos lanches são frescos colhidos de nossa própia plantação</p>
                    </li>
                    <li>
                        <h1>Pães</h1>
                        <p>Nós fabricamos nosso própio pão em nossa panificadora, assim tendo um pão que melhor atende as expectativas de nossos clientes</p>
                    </li>
                    <li>
                        <h1>Condimentos</h1>
                        <p>Nossos condimentos são feitos com uma fórmula especial de nossa  empressa</p>
                    </li>
                </ul>
                <button onClick={e => navigate('/menu')}>Cárdapio</button>
            </c.infoArea>
        </c.Container>
    )
}