import React, { Component } from 'react';
import styled from 'styled-components';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControlStyled from '../Partials/FormControlStyled';


class ProjectSelect extends Component {
	 state = {
    age: ''
  };
	handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

	render () {
		return (
			<FormControlStyled>
        <InputLabel htmlFor="project-simple">Project</InputLabel>
        <Select
        	value={this.state.project}
        	onChange={this.handleChange}
          inputProps={{
            name: 'project',
            id: 'project-simple',
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControlStyled>
		);
	}
}

export default ProjectSelect;