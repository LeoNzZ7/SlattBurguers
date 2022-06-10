import * as c from './styles';
import { useState } from 'react';
import { Envelope, LockKey, User } from 'phosphor-react';

export const FormPage = () => {
    const [formType, setFormType] = useState<'login' | 'register'>('login')
    
    return (
        <c.FormPage>
            <c.LoginArea formType={formType} >
                   {formType === 'login' && 
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
                            <button>Entrar</button>
                        </form>
                   } {formType !== 'login' &&
                    <c.ChangeFormType>
                        <h1>Já tem uma conta?</h1>
                        <p>Clique no botão abaixo e entre com a sua conta</p>
                        <button onClick={e => setFormType(formType === 'register' ? 'login' : 'register')} >Entre com a sua conta</button>
                    </c.ChangeFormType>
                   }
            </c.LoginArea>
            <c.RegisterArea formType={formType} >
               {formType === 'login' &&
                <c.ChangeFormType>
                    <h1>Não tem uma conta ainda?</h1>
                    <p>Clique no botão abaixo e crie sua conta</p>
                    <button onClick={e => setFormType(formType === 'login' ? 'register' : 'login')} >Crie sua conta</button>
                </c.ChangeFormType>
                } {formType === 'register' &&
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
                        <button>Criar conta</button>
                    </form>
                }
            </c.RegisterArea>
        </c.FormPage>
    );
};