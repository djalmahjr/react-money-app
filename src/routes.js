import { Route, Switch } from 'react-router'

import FormBalance from './views/FormBalance/FormBalance'
import ListMarket from './views/ListMarket/ListMarket'
import Home from './views/Home/Home'


export default () => {
    return (
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/list-market' exact component={ListMarket} />
                <Route path='/form-balance' exact component={FormBalance} />
            </Switch>
    )
}