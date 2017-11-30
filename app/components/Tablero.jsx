import React from 'react';
import Casilla from './Casilla.jsx';

const casillaStyle = {
	height: '100px',
	width: '100px'
};

export default class Tablero extends React.Component {
	render() {
		let tablero = this.props.valores.map((valoresFila, indiceFila) => {
			let fila = valoresFila.map((valor, indiceColumna) => {
				let myKey = "" + indiceFila + indiceColumna;
				return(
					<Casilla valor={valor} key={myKey}/>
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