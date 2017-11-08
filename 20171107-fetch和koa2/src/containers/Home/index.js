import React,{Component} from 'react'
import {Route,Link} from 'react-router-dom'

import List from '../List'
class Home extends Component{
    render(){
        return (
            <div>
                <p>Home</p>
                {/*<Route path='/list' component={List}>to list</Route>*/}
                <Link to='/list'>to list</Link>
            </div>
        )
    }
}

export default Home;
