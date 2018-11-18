import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './workExperience.css';
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
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


const workExperience = () => {
  return (
    <div className="weform">
          <Grid container spacing={12}>
        <Grid container xs={2} />
         <Grid container xs={8} spacing={16}>
          <Grid container item spacing={12}>
            <Typography variant="h6" gutterBottom>
              Work Experience
            </Typography>
          </Grid>
        <Grid container item spacing={12}>
            <TextField fullWidth variant="outlined" label="Employer Name" required="true" />
        </Grid>
          <Grid container item spacing={12}>
            <TextField fullWidth variant="outlined" label="Name of supervisor" required="true" />
          </Grid>
          <Grid container item spacing={12}>
            <TextField
              fullWidth
              variant="outlined"
              label="Telephone"
              type="number"
              id="standard-number"
              required="true"
            />
          </Grid>
          <Grid container item spacing={12}>
            <TextField fullWidth variant="outlined" label="Email" required="true" />
          </Grid>
          <Grid container item spacing={12}>
            <TextField fullWidth variant="outlined" label="Previous title" required="true" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              placeholder="Please explain your previous job responsibilities"
              variant="outlined"
              multiline={true}
              rows={10}
              rowsMax={20}
              required="true"
              fullWidth
            />
          </Grid>
         
        </Grid>
        <Grid container xs={2} />
      </Grid>
      <br/>
      <br/>
      <Grid container spacing={24}>
          <Grid item xs={4}>
            <TextField fullWidth label="Current Address: Street & Number" required="true" />
          </Grid>
          <Grid item xs={2}>
            <TextField fullWidth label="Current Address: State"  required="true"/>
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Current Address: City" required="true"/>
          </Grid>
          <Grid item xs={3}>
            <TextField fullWidth label="Current Address: Zip" required="true"/>
          </Grid>
          <Grid container item spacing={12}>
            <Grid item xs={5}></Grid>
            <Button>Add another work experience?</Button>
          </Grid>
        </Grid>
    </div>
  );
};

export default workExperience;
