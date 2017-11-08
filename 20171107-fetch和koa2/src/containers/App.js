import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class App extends Component{
    render(){
        return (
            <div>
                <div>公共头部</div>
                {/*<div>{this.props.children}</div>*/}
                <div>
                    <Link to='/home'>首页</Link>
                </div>
                <div>公共尾部</div>
            </div>
        )
    }
}

export default App;