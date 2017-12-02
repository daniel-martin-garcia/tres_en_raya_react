import React from 'react';
import Casilla from './Casilla.jsx';

const casillaStyle = {
	height: '100px',
	width: '100px'
};

export default class Tablero extends React.Component {
	constructor(props) {
		super(props)
		this.tableroClick = this.tableroClick.bind(this);
	}

	tableroClick(numeroFila, numeroColumna) {
		this.props.appClick(numeroFila, numeroColumna);
	}

	render() {
		let tablero = this.props.valores.map((valoresFila, indiceFila) => {
			let fila = valoresFila.map((valor, indiceColumna) => {
				let myKey = "" + indiceFila + indiceColumna;
				return(
					<Casilla valor={valor} key={myKey} indiceFila={indiceFila} indiceColumna={indiceColumna} tableroClick={this.tableroClick}/>
				);
			});
			return (
				<div key={"fila" + indiceFila}>{fila}</div>
			);
		});
		return (
		  <div>{tablero}</div>
		);
	}
}