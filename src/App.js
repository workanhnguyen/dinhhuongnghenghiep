import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './responsive.scss';
import { publicRoutes } from './routes';

const App = () => {

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          {publicRoutes.map((route, index) =>{
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App