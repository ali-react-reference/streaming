import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      {/* using Router instead of BrowserRouter lets us use a custom history object for easy programmatic routing */}
      <Router history={history}>
        <div>
          <Header></Header>
          {/* switch only shows one route */}
          <Switch>
          {/* react router extracts the second part of the url, browser router gets this and decides the component(s) to show */}
          {/* the 'exact keyword - the path must be an exact match */}
          {/* if the 'exact' keyword isn't there the router shows the component if the url contains '/' */}
            <Route exact path="/" component={StreamList}></Route>
            <Route path="/streams/new" component={StreamCreate}></Route>
            <Route path="/streams/edit/:id" component={StreamEdit}></Route>
            <Route path="/streams/delete/:id" component={StreamDelete}></Route>
            <Route path="/streams/show/:id" component={StreamShow}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
