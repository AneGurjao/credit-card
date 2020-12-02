import * as React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CardCredit from './components/credit-card'

const Pagina404 = () => <div>Página 404</div>

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={CardCredit} exact />
        <Route component={Pagina404} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
