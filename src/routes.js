import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './pages/home';
import Header from './components/header';
import Filmes from './pages/filmes';
import Favoritos from './pages/favoritos';
import Error from './pages/error'

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/filme/:id" component={Filmes} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route path="*" component={ Error }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;