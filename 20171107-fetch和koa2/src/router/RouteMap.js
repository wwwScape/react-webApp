import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import App from '../containers/App'
import Home from '../containers/Home'
import List from '../containers/List'
import Detail from '../containers/Detail'
import NotFound from '../containers/NotFound'

class RouteMap extends Component{
    render(){
        return(
            <Router>
                <div>
                    <Switch>
                        <Route path='/' exact component={App}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/list' component={List}/>
                        <Route path='/detail/:id' component={Detail}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RouteMap
