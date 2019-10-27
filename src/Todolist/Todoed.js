import React, { Component } from 'react'

export default class Todoed extends Component {
    render() {
        let that = this;
         // finished 已经完成事项的清单
         let finished = this.props.to_do.map((item,idx)=>{
            if(item.state){
                return(
                    <p key={idx}>
                        <input type="checkbox" checked={item.state} onChange={()=>{that.props.changeTodo(idx)}}/>
                        {item.title} <button onClick={()=>{that.props.delTodo(idx)}}>删除</button>
                    </p>);
            }
            return null;
        });
        return (
            <div>
                <div>
                    <h1>已经完成</h1>
                    <p>已经完成{this.props.finish}件任务了!</p>
                    <ul className="list">{finished}</ul>
                </div>
            </div>
        )
    }
}
