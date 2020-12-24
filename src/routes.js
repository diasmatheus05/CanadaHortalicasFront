import { Switch, Route } from 'react-router-dom'

import Home from './pages/home/home'
import Catalogo from './pages/catalogo/catalogo'
import Admin from './pages/admin/admin'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} /> 
      <Route exact path="/catalogo" component={Catalogo} />
      <Route exact path="/administrador-canada-hortalicas" component={Admin} />
    </Switch>
  )
}