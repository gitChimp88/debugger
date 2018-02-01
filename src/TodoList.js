import React from 'react'
import TodoItem from './TodoItem'

export default class TodoList extends React.Component {
	render(){
		return ( 
			
			<div>
			 {this.props.todos.map((ele, i)=>{
				return <TodoItem 
							key  	= {i} 
							todo 	= {ele}
							id   	= {i}
							remove = {this.props.remove}
						/>
			})}
		</div>
			)
	}
}