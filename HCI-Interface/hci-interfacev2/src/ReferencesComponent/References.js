import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import './References.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const References = props => {
  return (
    <div className="Rform">
      <Grid container spacing={12}>
        <Grid container xs={2} />
         <Grid container xs={8} spacing={16}>
          <Grid container item spacing={12}>
            <Typography variant="h6" gutterBottom>
              References
            </Typography>
          </Grid>
        <Grid container item spacing={12}>
            <TextField fullWidth variant="outlined" label="Name" required="true" />
        </Grid>
          <Grid container item spacing={12}>
            <TextField fullWidth variant="outlined" label="Title" required="true" />
          </Grid>
          <Grid container item spacing={24}>
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
                  <Grid item xs={12}></Grid>
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
            <TextField fullWidth variant="outlined" label="Name" required="true" />
          </Grid>
          <Grid container item spacing={12}>
            <Button onClick={props.addReference}>Add another reference?</Button>
            {props.shouldNotShowButton === true ? (
              ''
            ) : (
              <Button onClick={props.removeReference}>Remove reference</Button>
            )}
          </Grid>
        </Grid>
        <Grid container xs={2} />
      </Grid>
      <br />
    </div>
  );
};

export default References;
