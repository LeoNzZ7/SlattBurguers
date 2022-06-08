import * as c from './app.styles';
import { Header } from './components/header';

import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <c.Home>
          <c.homeArea>
            <c.Header>
              <Header/>
            </c.Header>
          </c.homeArea>
        </c.Home>
      </div>
    </BrowserRouter>
  );
};

export default App;
