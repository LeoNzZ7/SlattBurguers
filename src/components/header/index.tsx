import * as c from './styles';
import { Bag, Hamburger, ShoppingCart, SignIn, SignOut, Trash, User, UserCircle, UserPlus } from 'phosphor-react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { setLoggedStatus } from '../../redux/reducers/loggedReducer';
import { setFormType } from '../../redux/reducers/formTypeReducer';

export const Header = () => {
    const logged = useAppSelector(state => state.logged.status)
    const dispatch = useDispatch();
    
    return(
        <c.Container>
            <c.TitleArea>
                <Hamburger size={47} />
                <h1>Slatt Burguers</h1>
            </c.TitleArea>
            <c.MenuArea>
                {!logged &&
                    <ul>
                        <li><Link to='/'>Página inicial</Link></li>
                        <li><Link to='/form'>Cárdapio</Link></li>
                        <li><Link to='/form'>Entregadores</Link></li>
                        <li><Link to='/'>Sobre</Link></li>
                    </ul>
                } {logged &&
                    <ul>
                        <li><Link to='/'>Página inicial</Link></li>
                        <li><Link to='/'>Cárdapio</Link></li>
                        <li><Link to='/'>Entregadores</Link></li>
                        <li><Link to='/'>Sobre</Link></li>
                    </ul>
                }
            </c.MenuArea>
            <c.acountArea>
                <Menu>
                    <Menu.Button>
                        <ShoppingCart className='icon' size={40}/>
                    </Menu.Button>
                    <Menu.Items  className='cart-menu'>
                        <Menu.Item>
                            {({active}) => (
                                <table>
                                    <tr>
                                        <td>Nome</td>
                                        <td>Foto</td>
                                        <td>Quantidade</td>
                                        <td>Valor</td>
                                    </tr>
                                </table>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
                {logged &&
                    <Menu>
                        <Menu.Button>
                            <UserCircle className='icon' size={40}/>
                        </Menu.Button>
                        <Menu.Items className='account-menu' >
                            <Menu.Item>
                                {({active}) => (
                                    <Link to='/form'>
                                        <User className='icon' size={28} weight="bold" />
                                        Minha Conta    
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <Link to='/'>
                                        <Bag className='icon' size={28} weight="bold" />
                                        Pedidos
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <Link to='/' onClick={e => dispatch(setLoggedStatus(false))} >
                                        <SignOut className='icon' size={28} weight="bold" />
                                        Sair
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                } {!logged &&
                    <Menu>
                        <Menu.Button>
                            <UserCircle className='icon' size={40}/>
                        </Menu.Button>
                        <Menu.Items className='account-menu' >
                            <Menu.Item>
                                {({active}) => (
                                    <Link to='/form' onClick={e => dispatch(setFormType('register'))}>
                                        <UserPlus className='icon' size={28} weight="bold" />
                                        Criar conta
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({active}) => (
                                    <Link to='/form' onClick={e => dispatch(setFormType('login'))}>
                                        <SignIn className='icon' size={28} weight="bold" />
                                        Entrar
                                    </Link>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                }
            </c.acountArea>
        </c.Container>
    );
};