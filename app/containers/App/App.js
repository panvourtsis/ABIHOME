import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import './style.scss';

const App = () => (
  <div className="app-wrapper">
    <Helmet
      titleTemplate="%s - ABIHOME"
      defaultTitle="ABIHOME"
    >
      <meta name="description" content="Mit ABIHOME organisiert ihr eure Abizeitung/euer Abibuch und die gesamte Abiphase einfach, stressfrei und kostenlos online." />
    </Helmet>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
