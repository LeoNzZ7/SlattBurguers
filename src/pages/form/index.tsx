import * as c from './styles';
import { FormEvent, FormEventHandler, FormHTMLAttributes, useState } from 'react';
import { Envelope, LockKey, User } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { setLoggedStatus } from '../../redux/reducers/loggedReducer';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setFormType } from '../../redux/reducers/formTypeReducer';

export const FormPage = () => {
    const form = useAppSelector(state => state.type)
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (event: FormEvent<HTMLInputElement>) => {
        event.preventDefault();

        dispatch(setLoggedStatus(true));
        navigate('/');
    };

    const handleLogin = (event: FormEvent<HTMLInputElement>) => {

        dispatch(setLoggedStatus(true));
        navigate('/');
    };

    return (
        <c.FormPage>
            <c.LoginArea formType={form.type} >
                   {form.type === 'login' && 
                        <form>
                            <h1>Entre com a sua conta</h1>
                            <label>
                                <Envelope className='icon' size={35} />
                                <input type='email' placeholder='Digite seu email' required />
                            </label>
                            <label>
                                <LockKey className='icon' size={35} />
                                <input type='password' placeholder='Digite sua senha' required />
                            </label>
                            <input type='submit' className='button' onClick={handleLogin} value='Entrar' />
                        </form>
                   } {form.type !== 'login' &&
                    <c.ChangeFormType>
                        <h1>Já tem uma conta?</h1>
                        <p>Clique no botão abaixo e entre com a sua conta</p>
                        <button onClick={e => dispatch(setFormType('login'))} >Entre com a sua conta</button>
                    </c.ChangeFormType>
                   }
            </c.LoginArea>
            <c.RegisterArea formType={form.type} >
               {form.type === 'login' &&
                <c.ChangeFormType>
                    <h1>Não tem uma conta ainda?</h1>
                    <p>Clique no botão abaixo e crie sua conta</p>
                    <button onClick={e => dispatch(setFormType('register'))} >Crie sua conta</button>
                </c.ChangeFormType>
                } {form.type === 'register' &&
                    <form>
                        <div className='inputName' >
                            <label>
                                <User className='icon' size={35} />
                                <input type='text' required placeholder='Nome' />
                            </label>
                            <label>
                                <User className='icon' size={35} />
                                <input type='text' placeholder='Sobrenome' />
                            </label>
                        </div>
                        <label>
                            <Envelope className='icon' size={35} />
                            <input type='email' required placeholder='Email' />
                        </label>
                        <label>
                            <LockKey className='icon' size={35} />
                            <input type='password' required placeholder='Senha' />
                        </label>
                        <label>
                            <LockKey className='icon' size={35} />
                            <input type='password' required placeholder='Confirme a senha' />
                        </label>
                        <input type='submit' className='button' onClick={handleRegister} value='Criar conta' />
                    </form>
                }
            </c.RegisterArea>
        </c.FormPage>
    );
};