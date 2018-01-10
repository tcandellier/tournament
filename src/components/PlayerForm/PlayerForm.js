import React, { Component } from 'react';
import Formsy from 'formsy-react';
import { Prompt } from 'react-router-dom';
import Input from '../Input';

class PlayerForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        saving: false,
        valid: true,
        dirty: false,
        title: 'test' // `${props.person.firstname} ${props.person.lastname}`
      }
    }
    
    onSubmit = (model, reset) => {
      this.setState({ saving: true });
      this.props.submit(model)
      .then(success => {
        if (success) {
          this.props.onDone();
        } else {
          this.setState({ saving: false });
          alert('could not update person :(');
          reset();
        }
      });
    }
  
    onFormValid = () => {
      this.setState({ valid: true });
    }
  
    onFormInvalid = () => {
      this.setState({ valid: false });
    }
  
    onChange = (model, isDirty) => {
      this.setState({
        title: `${model.firstname} ${model.lastname}`,
        dirty: isDirty
      });
    }
  
    
    render() {
      const { player } = this.props;
      const { saving, valid, title, dirty } = this.state;
  
      return (
        <Formsy.Form onValidSubmit={this.onSubmit} onValid={this.onFormValid} onInvalid={this.onFormInvalid}>

        </Formsy.Form>
      );
    }
  }
  
  export default PlayerForm;