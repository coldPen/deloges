import React from 'react';
import { Switch } from 'react-router-dom';
import AppRoute from './Route';

import HelloWorld from '../../pages/HelloWorld';
import NotFoundError from '../../pages/NotFoundError';

const App = () => (
  <Switch>
    <AppRoute path="/" exact component={HelloWorld} />
    <AppRoute statusCode={404} component={NotFoundError} />
  </Switch>
);

export default App;
