import React from 'react'
import { BrowserRouter , Switch, Route } from 'react-router-dom';

import Convidado from './pages/Convidado';
import Festa from './pages/Festa';
import Home from './pages/Home';

export default function Routes()
{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/convidado" component={Convidado} />
                <Route path="/festa" component={Festa} />
            </Switch>
        </BrowserRouter>
    );
}

