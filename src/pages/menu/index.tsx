import * as c from './styles';
import { MenuItem } from '../../data/menu.items';
import { Header } from '../../components/header';

export const Menu = () => {
    const formatValue = (n: number) => {
        let formatedValue = n.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return formatedValue
    };

    return(
        <c.Container>
            <c.Header>
                <Header/>
            </c.Header>
            <h1 className='title'>Cárdapio</h1>
            <c.MenuArea>
                {MenuItem &&
                    MenuItem.map((item, index) => (
                        <c.MenuItem key={index} >
                            <div className='image'>
                                <img src={item.img} />
                            </div>
                            <h1>{item.name}</h1>
                            <h3>{formatValue(item.price)}</h3>
                            <button>Adicionar ao carrinho</button>
                        </c.MenuItem>
                    ))
                }
            </c.MenuArea>
        </c.Container>
    );
};