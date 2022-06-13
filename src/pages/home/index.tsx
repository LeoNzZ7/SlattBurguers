import * as c from './styles';
import { Header } from '../../components/header';

export const Home = () => {
    return(
        <c.Home>
          <c.homeArea>
            <c.Header>
              <Header/>
            </c.Header>
          </c.homeArea>
        </c.Home>
    );
};