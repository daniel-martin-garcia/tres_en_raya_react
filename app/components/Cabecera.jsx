import React from 'react';
import { Panel } from 'react-bootstrap';

const title = (
	<h3>Turno</h3>
);

export default class Cabecera extends React.Component {
	render(){
		return (
			<Panel header={title} bsStyle="info" className="cabecera">{this.props.texto}</Panel>
		);
	}
}