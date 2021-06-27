import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { CreatePoint } from './pages/CreatePoint';

export function Routes() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" />
    </BrowserRouter>
  )
}