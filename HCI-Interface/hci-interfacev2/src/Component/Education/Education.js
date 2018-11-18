import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './Education.css';
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


const Education = () => {
  return (
    <div className="Eform">
    <Grid container item spacing={24}>
     <Grid item xs={6}></Grid>
        <Grid item xs={1}>
            <Typography variant="h6" gutterBottom>
              Educational Information
            </Typography>
            </Grid>
          </Grid>
         
     <Grid container item spacing={12}>
     <Grid item xs={5}></Grid>
     <Grid item xs={3}>
        <FormControlLabel
          control={
            <Switch
              //checked={this.state.checkedA}
              //onChange={this.handleChange('checkedA')}
              value="Yes"
              required="true"
            />
          }
          label="Do you have a high school diploma or equivalent?"
        />
        <FormHelperText>Yes or no render</FormHelperText>
        </Grid>
       </Grid>
       <Grid container item spacing={12}>
       <Grid item xs={5}></Grid>
        <Grid item xs={3}>
        <FormControlLabel
          control={
            <Switch
              //checked={this.state.checkedA}
              //onChange={this.handleChange('checkedA')}
              value="Yes"
              required="true"
            />
          }
          label="Do you have any university or college degrees?"
        />
        <FormHelperText>Yes or no render</FormHelperText>
        </Grid>
     </Grid>
     <br/>
     <Grid container spacing={12}>
          <Grid item xs={5}/>
           <TextField fullWidth variant="outlined" label="Please list any degree(s)" required="true" />
        </Grid>
        <Button> Add another degree</Button>
        <Grid item xs={12}>
            <TextField
              placeholder="Please list any additional awards or certifications"
              variant="outlined"
              multiline={true}
              rows={10}
              rowsMax={20}
              required="true"
              fullWidth
            />
          </Grid>
     
    </div>
  );
};

export default Education;
