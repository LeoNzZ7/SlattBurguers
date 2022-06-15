import * as c from './styles';
import { MenuItem } from '../../data/menu.items';

export const Menu = () => {
    return(
        <c.Container>
            <div>
                {MenuItem &&
                    MenuItem.map((item, index) => (
                        <img key={index} src={item.img} />
                    ))
                }
            </div>
        </c.Container>
    );
};