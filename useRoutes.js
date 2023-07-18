import { Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/notFound';

function UseRoutes() {

  let element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return(
      <div>
        <h1>useRoutes</h1>

        <nav>
          <Link to="/">Home</Link>{' '}
          <Link to="/about">About</Link>{' '}
        </nav>     
        
        {element}
      </div>
  ); 
}

export default UseRoutes;
