import { BrowserRouter } from 'react-router-dom';
import { useAppSelector } from './redux/hooks/useAppSelector';
import { PublicRoutes } from './routes/public.routes';
import { PrivateRoutes } from './routes/private.routes';

const App = () => {
  const logged = useAppSelector(state => state.logged.status);

  return(
    <BrowserRouter>
      {!logged &&
        <PublicRoutes/>
      } {logged &&
        <PrivateRoutes/>
      }
    </BrowserRouter>
  ); 
};

export default App;
