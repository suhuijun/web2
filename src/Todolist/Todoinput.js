import React, { Component } from 'react';

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            val: '请输入任务:)' //设置默认值
        }
    }
    handleInput = (e)=>{
        if(e.keyCode === 13){ //回车
            this.props.addTodo(e.target.value);
            e.target.value = '';
        }
    }
    handleChange = (e)=>{
        this.setState({
            val: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input onChange={(e)=>this.handleChange(e)} placeholder={this.state.val} onKeyDown={(e)=>this.handleInput(e)} type="text"/>
            </div>
        )
    }
}