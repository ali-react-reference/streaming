import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header></Header>
          {/* react router extracts the second part of the url, browser router gets this and decides the component(s) to show */}
          {/* the 'exact keyword - the path must be an exact match */}
          {/* if the 'exact' keyword isn't there the router shows the component if the url contains '/' */}
          <Route exact path="/" component={StreamList}></Route>
          <Route path="/streams/new" component={StreamCreate}></Route>
          <Route path="/streams/edit" component={StreamEdit}></Route>
          <Route path="/streams/delete" component={StreamDelete}></Route>
          <Route path="/streams/show" component={StreamShow}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
