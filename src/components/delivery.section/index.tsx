import { Envelope, LockKey, PhoneCall, PhoneDisconnect, User } from 'phosphor-react';
import * as c from './styles';

export const Delivery = () => {
    return(
        <c.Container>
            <c.DeliveryInfo>
                <div>
                    <h1>Entregadores</h1>
                    <p>Contamos com  um sistema de entregadores parceiros, no qual você pode hoje mesmo fazer parte preenchendo o formulário abaixo</p>
                    <form>
                        <label>
                            <User size={40} className='icon' />
                            <input type='text' placeholder='Nome'/>
                        </label>
                        <label>
                            <Envelope size={40} className='icon' />
                            <input type='email' placeholder='Endereço email'/>
                        </label>
                        <label>
                            <PhoneCall size={40} className='icon' />
                            <input type='tel' placeholder='Número de telefone'/>
                        </label>
                        <button>Enviar</button>
                    </form>
                </div>
            </c.DeliveryInfo>
            <c.Image>
            </c.Image>
        </c.Container>
    );
}