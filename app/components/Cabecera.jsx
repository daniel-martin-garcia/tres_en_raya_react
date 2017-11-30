import React from 'react';

export default class Cabecera extends React.Component {
	render(){
		return (
			<header className="cabecera">{this.props.texto}</header>
		);
	}
}