import React,{Component} from 'react'
import {Link} from 'react-router-dom'
class List extends Component{
    render(){
        const list = ["item1","item2","item3","item4","item5"];
        return (
            <ul>
                {
                    list.map((value,index)=>{
                        return (
                            <li key={index}>
                                <Link to={'/detail/'+index}>点击跳转到-{value}</Link>
                            </li>
                            )

                    })
                }
            </ul>
        )
    }
}

export default List;
