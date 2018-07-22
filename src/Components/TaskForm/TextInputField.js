import React, { Component } from 'react';
import FormControlStyled from '../Partials/FormControlStyled';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

class TextInputField extends Component {
	render() {
		return (
			<FormControlStyled>
				<InputLabel htmlFor="name-simple">{this.props.title}</InputLabel>
				<Input name={this.props.name} value={this.props.value} id="name-simple" onChange={this.props.changeValue} />
			</FormControlStyled>
		);
	}
}

export default TextInputField;
