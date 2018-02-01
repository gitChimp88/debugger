import React from 'react'

export default class TodoItem extends React.Component{
	
	handleClick(){
		this.props.remove(this.props.index)
	}
	
	render(){
		let style ={ 
			display:'grid',
			border:'1px solid black',
			padding:'1rem',
			marginBottom:'1rem',
			borderRadius:'.2rem'
		}
		let icon = {
			justifySelf:'end'
		}
		return(
			<div style={style}> {this.props.todo}
				  <i 
					onClick={this.handleClick.bind(this)}
					style={icon}
					className="fa fa-trash"></i>
			</div>
		)
	}
}