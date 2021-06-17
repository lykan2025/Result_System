
import './App.css';
import React,{Component} from 'react';
import Login from './components/Login';
import Table from './components/Table';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
//import {Redirect} from 'react-router';
class App extends Component{

    componentDidMount()
    {
        /*Object.keys(this.props).includes("history")?
        this.props.history.push("/"):console.log(this.props)
        console.log(typeof(this.props))*/
        
        

    }
    render()
    {
        return(
            <div>
                <Router>
                    <Switch>
                        <Route path='/result' component={Table}/>
                        <Route exact path='' component={Login}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
