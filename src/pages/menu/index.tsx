import * as c from './styles';
import { MenuItem } from '../../data/menu.items';
import { Header } from '../../components/header';
import { Menu } from '@headlessui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setId, setName, setPrice, setImg } from '../../redux/reducers/newItemCartReducer';

export const FoodMenu = () => {
    const [index, setIndex] = useState(0);

    const dispatch =  useDispatch()

    const formatValue = (n: number) => {
        let formatedValue = n.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
        return formatedValue
    };

    const handleAddToCart = () => {
        dispatch(setId(MenuItem[index].id));
        dispatch(setId(MenuItem[index].img));
        dispatch(setId(MenuItem[index].name));
        dispatch(setId(MenuItem[index].price));
    };
    
    return(
        <c.Container>
            <c.Header>
                <Header/>
            </c.Header>
            <h1 className='title'>Cárdapio</h1>
            <Menu>  
                <c.MenuArea> 
                    {MenuItem &&
                        MenuItem.map((item, index) => (
                            <c.MenuItem key={index} >
                                <div className='image'>
                                    <img src={item.img} />
                                </div>
                                <h1>{item.name}</h1>
                                <h3>{formatValue(item.price)}</h3>
                                <Menu.Button onClick={e  => setIndex(item.id)}>
                                    Adicionar ao carrinho
                                </Menu.Button>
                            </c.MenuItem>
                        ))
                    }
                </c.MenuArea>
                <Menu.Items className='menu-modal'>
                    <Menu.Item>
                        {({active}) => (
                            <div className='modal'>
                                <div className='modal-info' >
                                    <h1>{MenuItem[index].name}</h1>
                                    <img src={MenuItem[index].img} />
                                    <p>{MenuItem[index].description}</p>
                                </div>
                                <div className='modal-info'>
                                    <h1>{formatValue(MenuItem[index].price)}</h1>
                                    <button>Adiconar ao carrinho</button>
                                </div>
                            </div>                                         
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </c.Container>
    );
};