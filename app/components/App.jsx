import React from 'react';
import './../assets/scss/main.scss';
import Cabecera from './Cabecera.jsx';
import Tablero from './Tablero.jsx';
import Reset from './Reset.jsx';

const JUGADORX = "Las X"
const JUGADOR0 = "Los 0"

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
			movimientos: 0
		};
		this.appClick = this.appClick.bind(this);
		this.resetClick = this.resetClick.bind(this);
	}

	resetClick() {
		this.setState({
			turno: JUGADORX,
			valores: [
				['-','-','-'],
				['-','-','-'],
				['-','-','-'],
			],
			movimientos: 0

		});
	}

	appClick(numeroFila, numeroColumna) {
		let nuevosValores = this.state.valores.slice();
		let nuevoValor = this.state.turno === JUGADORX ? 'X': '0';
		nuevosValores[numeroFila][numeroColumna] = nuevoValor;
		this.setState({
			turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
			valores: this.state.valores,
			movimientos: this.state.movimientos + 1
		});
	}

	render() {
		let texto = "Turno de " + this.state.turno;
		return (
		  <div>
		  	<Cabecera texto={texto}/>
		  	<Tablero valores={this.state.valores} appClick={this.appClick}/>
		  	<h3> Numero de movimientos: {this.state.movimientos}</h3>
		  	<Reset resetClick={this.resetClick}/>
		  </div>
		);
  }

}

