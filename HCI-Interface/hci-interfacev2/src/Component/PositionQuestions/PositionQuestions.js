import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './PositionQuestions.css';
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

const PositionQuestions = () => {
  return (
    <div className="PQform">
    
        <Grid container spacing={12}>
           <Grid item xs={12} >
            <Typography variant="h6" align="center" gutterBottom>
              Position Questions
            </Typography>
            </Grid>
          
        <Grid item xs={3}>
          <TextField
            fullWidth
            label="Please enter the position you are applying for"
            required="true"
          />
        </Grid>
        <Grid xs={1}></Grid>
        <Grid item xs={2}>
        <TextField
          fullWidth
          id="standard-number"
          label="Please enter your desired salary"
          type="number"

         
        />
        </Grid>
        
        <Grid item xs={3}>
        <TextField
        id="date"
        helperText="Starting date"
        type="date"
        defaultValue="2017-05-24"
        required="true"
      />
        </Grid>

        <Grid item xs={3}>
        <TextField
          fullWidth
          id="standard-number"
          helperText="What time do you anticipate coming to work?"
          type="time"
        />
           <TextField
          fullWidth
          id="standard-number"
          helperText="What time do you anticipate leaving work?"
          type="time"
        />
        </Grid>
        </Grid>
    </div>
  );
};

export default PositionQuestions;
