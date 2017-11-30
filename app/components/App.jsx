import React from 'react';
import './../assets/scss/main.scss';
import Cabecera from './Cabecera.jsx';
import Tablero from './Tablero.jsx';

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
		return (
		  <div>
		  	<Cabecera texto={texto}/>
		  	<Tablero valores={this.state.valores}/>
		  </div>
		);
  }

}

