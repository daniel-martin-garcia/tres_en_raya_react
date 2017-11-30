import React from 'react';

const casillaStyle = {
	height: '100px',
	width: '100px',
};

export default class Casilla extends React.Component {
	render() {
		return(
			<button style={casillaStyle}>{this.props.valor}</button>
		);
	}
}