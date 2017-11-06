import React,{Component} from 'react'
import './style2.less'
import imgs from './img.jpg'
class Hello extends Component{
    render(){
        return(
            <div id="child">
                <img src={imgs} alt="" width={100} height={100}/>
                <div className="one">Hello World</div>
            </div>
        )
    }
}

export default Hello;