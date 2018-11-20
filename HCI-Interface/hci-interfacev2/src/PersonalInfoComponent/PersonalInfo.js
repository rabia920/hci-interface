import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import './PersonalInfo.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { FormHelperText } from '../../node_modules/@material-ui/core';

class Personals extends Component {
  state = {
    status: [false, false, false, false]
  };
  handleChange = num => {
    let valueToRender = JSON.parse(JSON.stringify(this.state.status));
    valueToRender[num] = !valueToRender[num];
    this.setState({ status: valueToRender });
  };
  render() {
    return (
      <div className="form">
        <Grid container spacing={12}>
          <Grid item xs={3}>
          <FormHelperText>{this.state.status[0] === true ? "Yes" : "No" }</FormHelperText>
            <FormControlLabel
              control={
                <Switch
                  //checked={this.state.checkedA}
                  onChange={ () => this.handleChange(0)}
                  value="Yes"
                />
              }
              label="Are you over 18 years of age?"
            />
          </Grid>
          
          <Grid item xs={3}>
          <FormHelperText>{this.state.status[1] === true ? "Yes" : "No" }</FormHelperText>
            <FormControlLabel
              control={
                <Switch
                  //checked={this.state.checkedA}
                  onChange={ () => this.handleChange(1)}
                  value="Yes"
                />
              }
              label="Are you authorized to work in the U.S.?"
            />
            
          </Grid>
          
        </Grid>
        <Grid container spacing={40}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              id="date"
              type="date"
              label="Application Date"
              defaultValue="2018-11-12"
              required="true"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              required="true"
            />
          </Grid>

          <Grid item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              required="true"
            />
          </Grid>
          <Grid item xs={1}>
            <TextField
              fullWidth
              variant="outlined"
              label="M.I."
              required="true"
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={12}>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Switch
                  //checked={this.state.checkedA}
                  onChange={ () => this.handleChange(2)}
                  value="Yes"
                  required="true"
                />
              }
              label="Have you served in the military?"
            />
            <FormHelperText>{this.state.status[2] === true ? "Yes" : "No" }</FormHelperText>
          </Grid>
        </Grid>
        <br />

        <Grid container spacing={24}>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Current Address: Street and Number"
              required="true"
            />
          </Grid>

          <Grid item xs={2}>
            <TextField
              fullWidth
              label="Current Address: State"
              required="true"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              fullWidth
              label="Current Address: City"
              required="true"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Current Address: Zip" required="true" />
          </Grid>
          <Grid item xs={4}>
            <TextField
              fullWidth
              label="How long have you been at your current address?"
              helperText="Enter years/months; Please end answer with 'years' or 'months'"
              required="true"
            />
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={24}>
          <Grid item xs={4}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone Number"
              type="number"
              id="standard-number"
              required="true"
            />
          </Grid>

          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Switch
                  //checked={this.state.checkedA}
                  onChange={ () => this.handleChange(3)}
                  value="Yes"
                  required="true"
                />
              }
              label="Do you have a driver's license?"
            />
          </Grid>
            
          <Grid container spacing={16}>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="Diver's license number"
                required="true"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                fullWidth
                label="State of issued license"
                required="true"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                fullWidth
                id="date2"
                type="date"
                label="Expiration Date"
                defaultValue="2018-11-12"
                required="true"
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Personals;
