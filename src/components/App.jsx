import { BrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import Header from './Header/Header';
import StreamCreate from './Stream/Create';
import StreamDelete from './Stream/Delete';
import StreamEdit from './Stream/Edit';
import StreamList from './Stream/List';
import StreamShow from './Stream/Show';

const AppJsx = props => (
  <div className="ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/create" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </div>
    </BrowserRouter>
  </div>
);

export default AppJsx;
