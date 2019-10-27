import React, { Component } from 'react'

export default class Todoing extends Component {
    render() {
        let that = this;
        // unfinished 正在进行
        let unfinished = this.props.to_do.map((item,idx)=>{
            if(!item.state){
                return(
                    <p key={idx}>
                        <input type="checkbox" checked={item.state} onChange={()=>{that.props.changeTodo(idx)}}/>
                        {item.title} <button onClick={()=>{that.props.delTodo(idx)}}>删除</button>
                    </p>);
            }
            return null;
        });
    
        return(
            <div>
                <div>
                    <h1>正在进行</h1>
                    <p>您还有{this.props.count_num}件任务没完成！</p>
                    <ul className="list">{unfinished}</ul>
                </div>
            </div>
        )
    }
}