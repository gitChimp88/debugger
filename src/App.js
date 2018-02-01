import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList'

 export default class App extends Component {
  constructor(){
    super()
    this.state = {
        todos:[
              "go shopping",
              "eat out",
              "do the laundry",
              "pay the bills"  
            ]
      }
  }

  remove(index){
    var tempState = this.state.todos
    tempState.splice(index,1)
    this.setState({todos:tempState})

  }
  render() {
    return (
      <div className="App">
          <TodoList 
              remove = { this.remove.bind(this)}
              todos  = { this.state.todos}/>
      </div>
    );
  }
}
 
 /*
 			  { todo:"go shopping"  },
              { todo:"eat out"  },
              { todo:"do the laundry" },
              { todo:"pay the bills"  }
 
 */


