import * as c from './styles';
import { Hamburger, ShoppingCart, SignOut, User, UserCircle } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Popover, Menu } from '@headlessui/react';

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
                <Popover>
                    <Popover.Panel>Carrinho</Popover.Panel>
                    <Popover.Button>
                        <ShoppingCart className='icon' size={40}/>
                    </Popover.Button>
                </Popover>
                <Menu>
                    <Menu.Button>
                        <UserCircle className='icon' size={40}/>
                    </Menu.Button>
                    <Menu.Items className='account-menu' >
                        <Menu.Item>
                            {({active}) => (
                                <Link to='/'>
                                    <User className='icon' size={28} weight="bold" />
                                    Minha Conta    
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({active}) => (
                                <Link to='/'>
                                    <SignOut className='icon' size={28} weight="bold" />
                                    Sair
                                </Link>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </c.acountArea>
        </c.Container>
    )
}