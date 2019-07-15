import { Router, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';
import history from '../history';
import StreamCreate from './Stream/Create';
import StreamDelete from './Stream/Delete';
import StreamEdit from './Stream/Edit';
import StreamList from './Stream/List';
import StreamShow from './Stream/Show';

const AppJsx = props => (
  <div className="ui container">
    <Router history={history}>
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit/:id" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </div>
    </Router>
  </div>
);

export default AppJsx;
