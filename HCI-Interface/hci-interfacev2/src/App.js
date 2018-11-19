import React, { Component } from 'react';
import './App.css';
import Personals from './PersonalInfoComponent/PersonalInfo';
import Refs from './ReferencesComponent/References';
import References from './ReferencesComponent/References';
import Button from '@material-ui/core/Button';
import BackgroundCheck from './Component/BackgroundCheck/BackgroundCheck'
import Education from './Component/Education/Education'
import WorkExperience from './Component/Experience/workExperience'

class App extends Component {
  state = { ReferencesArray: [1],
            workExperiencesArray: [1],
            degreesArray:[1] };

  addReference = event => {
    let referenceArray = [...this.state.ReferencesArray, 1];
    this.setState({ ReferencesArray: referenceArray });
  };
  removeReference = event => {
    let referenceArray = [...this.state.ReferencesArray];
    if (referenceArray.length > 1) {
      referenceArray.splice(referenceArray.length - 1, 1);
    }
    this.setState({ ReferencesArray: referenceArray });
  };


  addworkExperience = event =>{
    let workExperienceArray = [...this.state.workExperiencesArray, 1];
    this.setState({workExperiencesArray: workExperienceArray});
  };
  removeWorkExperience= event =>{
    let workExperienceArray = [...this.state.workExperiencesArray, 1];
    if(workExperienceArray.length>1){
    workExperienceArray.splice(workExperienceArray.length-1, 1);
    }
    this.setState({workExperiencesArray:workExperienceArray});
  }


  render() {
    let references = this.state.ReferencesArray.map((ref, index) => {
      return (
        <References
          shouldNotShowButton={index === 0}
          addReference={this.addReference}
          removeReference={this.removeReference}
        />
      );

    });

    let workExperiences =this.state.workExperiencesArray.map((we, index) =>
    {
      return(
        <WorkExperience
        shouldNotShowWorkExpButton = {index===0}
        addExperience={this.addworkExperience}
        removeExperience={this.removeWorkExperience}/>
      )
      
    })
    return (
      <div className="App">
        <Personals />
        {references}
        <BackgroundCheck></BackgroundCheck>
        <Education></Education>
        {workExperiences}
      </div>
      
    );
  }
}

export default App;
