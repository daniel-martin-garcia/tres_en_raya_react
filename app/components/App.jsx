import React from 'react';
import './../assets/scss/main.scss';

const JUGADORX = "Las X"
const JUGADORY = "Los 0"

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			turno: JUGADORX,
			valores: [
				['-','-','-'],
				['-','-','-'],
				['-','-','-'],
			],
		};
	}

	render() {
		let texto = "Turno de " + this.state.turno;
		let tablero = this.state.valores.map((valoresFila, indiceFila) => {
			let fila = valoresFila.map((valor, indiceColumna) => {
				let myKey = "" + indiceFila + indiceColumna;
				return(
					<span key={myKey}> {valor}</span>
				);
			});
			return (
				<div key={"fila" + indiceFila}>{fila}</div>
			);
		});
		return (
		  <div>
		  	<h2 id="heading">Tres en raya</h2>
		  	<header className="cabecera">{texto}</header>
		  	{tablero}
		  </div>
		);
  }

}

