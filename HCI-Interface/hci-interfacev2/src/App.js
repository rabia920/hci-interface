import React, { Component } from 'react';
import './App.css';
import Personals from './PersonalInfoComponent/PersonalInfo';
import Refs from './ReferencesComponent/References';
import References from './ReferencesComponent/References';
import Button from '@material-ui/core/Button';
import BackgroundCheck from './Component/BackgroundCheck/BackgroundCheck';
import Education from './Component/Education/Education';
import WorkExperience from './Component/Experience/workExperience';
import PositionQuestions from './Component/PositionQuestions/PositionQuestions';

class App extends Component {
  state = {
    ReferencesArray: [1],
    workExperiencesArray: [1],
    degreesArray: [1]
  };

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

  submitHandler = () => {
    this.preventDefault();
  };

  addworkExperience = event => {
    let workExperienceArray = [...this.state.workExperiencesArray, 1];
    this.setState({ workExperiencesArray: workExperienceArray });
  };
  removeWorkExperience = event => {
    console.log(this.state.workExperiencesArray, 'This is the array');
    let workExperienceArray = [...this.state.workExperiencesArray];
    if (workExperienceArray.length > 1) {
      workExperienceArray.splice(workExperienceArray.length - 1, 1);
    }
    this.setState({ workExperiencesArray: workExperienceArray });
  };

  addDegree = event => {
    let workExperienceArray = [...this.state.degreesArray, 1];
    this.setState({ degreesArray: workExperienceArray });
  };
  removeDegree = event => {
    console.log(this.state.workExperiencesArray, 'This is the array');
    let workExperienceArray = [...this.state.degreesArray];
    if (workExperienceArray.length > 1) {
      workExperienceArray.splice(workExperienceArray.length - 1, 1);
    }
    this.setState({ degreesArray: workExperienceArray });
  };

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

    let workExperiences = this.state.workExperiencesArray.map((we, index) => {
      return (
        <WorkExperience
          shouldNotShowWorkExpButton={index === 0}
          addExperience={this.addworkExperience}
          removeExperience={this.removeWorkExperience}
        />
      );
    });

    let degrees = this.state.degreesArray.map((degree, index) => {
      return (
        <Education
          shouldNotShowWorkExpButton={index === 0}
          addDegree={this.addDegree}
          removeDegree={this.removeDegree}
        />
      );
    });

    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <Personals />
          {references}
          <BackgroundCheck />
          <Education
          degrees={this.state.degreesArray}
          addDegree={this.addDegree}
          removeDegree={this.removeDegree}
        />
          {workExperiences}
          <PositionQuestions />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default App;
