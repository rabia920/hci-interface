import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './BackgroundCheck.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';

const BackgroundCheck = () => {
  return (
    <div className="BGform">
     <Grid container item spacing={24}>
     <Grid item xs={6}></Grid>
        <Grid item xs={1}>
            <Typography variant="h6" gutterBottom>
              Background Check
            </Typography>
            </Grid>
          </Grid>
      <Grid container spacing={16}>
      <Grid item xs={5}></Grid>
        <Grid item xs={3}>
          <FormControlLabel
           control={
            <Switch
              //checked={this.state.checkedA}
              //onChange={this.handleChange('checkedA')}
              value="Yes"
            />
          }
            label="Have you ever been accused, convicted, plead guilty to or charged with a misdemeanor or felony?"
        />
        </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Please explain your circumstances"
              variant="outlined"
              multiline={true}
              rows={10}
              rowsMax={20}
              required="true"
              fullWidth
            />
          </Grid>
      </Grid>
     
    </div>
  );
};

export default BackgroundCheck;
