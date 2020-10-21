import React from 'react';
import List from './List';
import Input from './Input';

class ToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
            newToDo:""
        }
        this.onInputChange=this.onInputChange.bind(this);
        this.onInputSubmit=this.onInputSubmit.bind(this);
        this.onListItemClick=this.onListItemClick.bind(this);
        this.deleteListItem=this.deleteListItem.bind(this);
    }
    
    onInputChange(event){
        this.setState({
            newToDo:event.target.value
        });
    }

    onInputSubmit(event){
        event.preventDefault();//加入这个函数以后，就不会出现加入的东西闪现后又消失的问题。具体的作用我还不清楚。
        if(this.state.newToDo===""){
            return;
        }
        this.setState({
            list:[...this.state.list,{item:this.state.newToDo,done:false}],
            newToDo:""
        });
    }
    
    onListItemClick(index){
        let previousStateList=this.state.list.slice(0);
        previousStateList[index].done=!previousStateList[index].done;
        this.setState({
            list: previousStateList
        });
    }
    
    deleteListItem(index){
        this.setState({
            list:[...this.state.list.slice(0,index),...this.state.list.slice(index+1)]
        });
    }

    componentWillMount(){
        this.setState({
            list:[{item:"First thing to do",done
        :true}]
        });
    }

    render(){
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1>
                            <hr/>
                            <Input value={this.state.newToDo} onInputChange={this.onInputChange} onInputSubmit={this.onInputSubmit}/>
                            <List listItems={this.state.list} onListItemClick={this.onListItemClick} deleteListItem={this.deleteListItem}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ToDoApp;