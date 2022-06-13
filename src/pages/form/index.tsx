import * as c from './styles';
import { FormEvent, useState } from 'react';
import { Envelope, LockKey, User } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { setLoggedStatus } from '../../redux/reducers/loggedReducer';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setFormType } from '../../redux/reducers/formTypeReducer';

export const FormPage = () => {
    const form = useAppSelector(state => state.type);

    type AccountInfoType = {
        id?: number,
        email: string,
        firstName: string,
        lastName?: string,
        password: string
    };

    const [AccountData, setAccountData] = useState<AccountInfoType[]>([
        {id: 0, email: 'leonardomartinha@gmail.com', firstName: 'Leonardo', lastName: 'Nunes Martinha', password: '123'}
    ]);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [warning, setWarning] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();

        if(firstName !== '' && email !== '' && password !== '' && confirmPassword !== '') {
            for(let i in AccountData) {
                if(email !== AccountData[i].email) {
                    if(password === confirmPassword) {
                        


                    } else {
                        setWarning('As senha não coincidem')
                    }
                } else {
                    setWarning('Email ja cadastrado')
                }
            };
        };
    };

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        if(email && password) {
            for(let i in AccountData) {
                if(email === AccountData[i].email) {
                    if(password === AccountData[i].password) {
                        dispatch(setLoggedStatus(true));
                        navigate('/');
                    } else {
                        setWarning('Senha incorreta')
                    };
                } else {
                    setWarning('Email incorreto')
                };
            };
        };
    };

    const handleChangeFormType = () => {
        dispatch(setFormType(form.type === 'register' ? 'login' : 'register'));

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <c.FormPage>
            <c.LoginArea formType={form.type} >
                   {form.type === 'login' && 
                        <form>
                            <h1>Entre com a sua conta</h1>
                            <label>
                                <Envelope className='icon' size={35} />
                                <input type='email' placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)} required />
                            </label>
                            <label>
                                <LockKey className='icon' size={35} />
                                <input type='password' placeholder='Digite sua senha' value={password} onChange={e => setPassword(e.target.value)} required />
                            </label>
                            <button className='button' onClick={handleLogin}>Entrar</button>
                        </form>
                   } {form.type !== 'login' &&
                    <c.ChangeFormType>
                        <h1>Já tem uma conta?</h1>
                        <p>Clique no botão abaixo e entre com a sua conta</p>
                        <button onClick={handleChangeFormType}>Entre com a sua conta</button>
                    </c.ChangeFormType>
                   }
            </c.LoginArea>
            <c.RegisterArea formType={form.type} >
               {form.type === 'login' &&
                <c.ChangeFormType>
                    <h1>Não tem uma conta ainda?</h1>
                    <p>Clique no botão abaixo e crie sua conta</p>
                    <button onClick={handleChangeFormType} >Crie sua conta</button>
                </c.ChangeFormType>
                } {form.type === 'register' &&
                    <form>
                        <div className='inputName' >
                            <label>
                                <User className='icon' size={35} />
                                <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)} required placeholder='Nome' />
                            </label>
                            <label>
                                <User className='icon' size={35} />
                                <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Sobrenome' />
                            </label>
                        </div>
                        <label>
                            <Envelope className='icon' size={35} />
                            <input type='email' value={email} onChange={e => setEmail(e.target.value)} required placeholder='Email' />
                        </label>
                        <label>
                            <LockKey className='icon' size={35} />
                            <input type='password' value={password} onChange={e => setPassword(e.target.value)} required placeholder='Senha' />
                        </label>
                        <label>
                            <LockKey className='icon' size={35} />
                            <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required placeholder='Confirme a senha' />
                        </label>
                        <button className='button' onClick={handleRegister}>Crir conta</button>
                    </form>
                }
            </c.RegisterArea>
        </c.FormPage>
    );
};