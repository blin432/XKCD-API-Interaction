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
          <Route  path="/search" component={Search}/>  
        </Switch>
      </div>
      );
    }
}
  


export default withRouter(App);
