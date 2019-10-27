import React, { Component } from 'react';
import Todoing from './Todoing';
import Todoinput from './Todoinput';
import Todoed from './Todoed';

export default class Todolist extends Component {
    //初始化
    constructor(){
        super();
        this.state = {
            to_do: localStorage.getItem("todolist")? JSON.parse(localStorage.getItem("todolist")):[],
            finish: 0,
            count_num: 0
            
        }
    }

    //读存储
    componentWillMount(){
        this.counting();
    }

    // 添加TODO
    addTodo = (msg)=>{
        var msgjson = {
            title: msg,
            state: false
        }
        var to_do = [...this.state.to_do, msgjson];
        this.setState({ // 注意异步操作
            to_do: to_do,
            count_num: this.state.count_num+1
        },()=>{
            localStorage.setItem("todolist", JSON.stringify(to_do));
        })
    }

    // 删除TODO
    delItem = (a)=>{
        var to_do = [...this.state.to_do];
        
        to_do.splice(a,1);
        this.setState({
            to_do:to_do
        },()=>{
            this.counting();
            localStorage.setItem("todolist", JSON.stringify(to_do));
        });
    }

    // 改变状态
    changeItem = (a) =>{
        var to_do = [...this.state.to_do];
        to_do[a].state = !to_do[a].state;
        this.setState({
            to_do:to_do
        },()=>{
            this.counting();
            localStorage.setItem("todolist", JSON.stringify(to_do));
        })
    }

    counting = () =>{
        var count_num = 0;
        var finish = 0;
        var to_do = this.state.to_do;
        for(var i = 0; i < to_do.length; i++){
            if(!to_do[i].state){
                count_num++;
            }else{
                finish++;
            }
        };
        this.setState({
            count_num: count_num,
            finish: finish
        })
    }

    render() {
        return (
            <div>
                <Todoinput addTodo={this.addTodo}/>
                <Todoing to_do={this.state.to_do} count_num={this.state.count_num} finish={this.state.finish} delTodo={this.delItem} changeTodo={this.changeItem}/>
                <Todoed to_do={this.state.to_do} delTodo={this.delItem} changeTodo={this.changeItem} />
            </div>
        )
    }
}