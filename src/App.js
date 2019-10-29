import React, { Component } from 'react';
import Home from './Components/Home.jsx';
import Search from './Components/Search.jsx';
import { Switch, Route, withRouter} from 'react-router-dom';



class App extends Component {
  render(){
      return(
        <div className="App">
        <Switch>
          <Route  path="/" exact component={Home}/>
          <Route  path="/search" component={Search}/>  {/* URL path to get specific note, Try  "http://localhost:3000/notes/1"!  */}
        </Switch>
      </div>
      );
    }
}
  


export default withRouter(App);
