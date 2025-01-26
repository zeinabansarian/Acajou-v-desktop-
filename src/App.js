import { useRoutes } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import Home from './pages/home';
import routes from './routes';

function App() {
  let router = useRoutes(routes);
  return (
    <div className="AcajouApp">
      {router}
      {/* <Home /> */}
    </div>
  );
}

export default App;
