import burgue from '../assets/menu/burgue.png';
import burgue2 from '../assets/menu/burgue2.png';
import burgue3 from '../assets/menu/burgue3.png';
import burgue4 from '../assets/menu/burgue4.png';
import burgue5 from '../assets/menu/burgue5.png';
import burgue6 from '../assets/menu/burgue6.png';
import burgue7 from '../assets/menu/burgue7.png';
import burgue8 from '../assets/menu/burgue8.png';
import burgue9 from '../assets/menu/burgue10.png';

type MenuItems = {
    id: number,
    name: string,
    img: string,
    description: string,
    price: number
};

export const MenuItem: MenuItems[] = [
    {id: 0, name: 'Slatt Burguer', description: 'O classico Slatt Burguer', img: burgue, price: 20},
    {id: 1, name: 'Slatt Cheddar', description: 'Um delicioso burguer com cheddar especial', img: burgue2, price: 22},
    {id: 2, name: 'Slatt salad', description: 'Uma porção de salada com queijo e o tradicional Slatt Brugue', img: burgue3, price: 22},
    {id: 3, name: 'Mega Slatt Burguer', description: 'O classico Slatt Burgue só que MEGA', img: burgue4, price: 30},
    {id: 4, name: 'Slatt Chicken', description: 'Uma porção de frango frito com molho especial alface no pão crocante', img: burgue5, price: 22}, 
    {id: 5, name: 'Slatt X-Chicken', description: 'Frango  grelhado com mussarela especial e o nosso burguer', img: burgue6, price: 25},
    {id: 6, name: 'Mini Slatt Bacon', description: 'Pequeno burgue com delicioso bacon tostado', img: burgue7, price: 22},
    {id: 7, name: 'Slatt Bacon', description: 'O incrivel Slatt Bacon', img: burgue8, price: 26},  
    {id: 8, name: 'Mega Slatt Bacon', description: 'O incrivel Slatt Bacon só que MEGA', img: burgue9, price: 30}
];