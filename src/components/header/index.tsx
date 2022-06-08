import * as c from './styles';
import { Hamburger, ShoppingCart, UserCircle } from 'phosphor-react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return(
        <c.Container>
            <c.TitleArea>
                <Hamburger size={47} />
                <h1>Slatt Burguers</h1>
            </c.TitleArea>
            <c.MenuArea>
                <ul>
                    <li><Link to='/'>Página inicial</Link></li>
                    <li><Link to='/'>Cárdapio</Link></li>
                    <li><Link to='/'>Entregadores</Link></li>
                    <li><Link to='/'>Sobre</Link></li>
                </ul>
            </c.MenuArea>
            <c.acountArea>
                <ShoppingCart className='icon' size={40}/>
                <UserCircle className='icon' size={40}/>
            </c.acountArea>
        </c.Container>
    )
}