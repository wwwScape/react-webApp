import React,{Component} from 'react'
class Detail extends Component{
    render(){
        return (
            <div>
                对应的列表页面的id是：{this.props.match.params.id}
            </div>
        )
    }
}

export default Detail;
