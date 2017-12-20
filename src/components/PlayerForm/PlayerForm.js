import React, { Component } from 'react';
import { Form } from 'formsy-react';
import { Prompt } from 'react-router-dom';
import Input from '../Input';


class PlayerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            saving: false,
            valid: true,
            dirty: false,
            title: '' // `${props.player.name}`
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
          title: '',
          dirty: isDirty
        });
      }

    render() {
        const { onDone, player } = this.props;
        const { saving, valid, title, dirty } = this.state;

        return (
            <Form
                disabled={saving}
                onValidSubmit={this.onSubmit}
                onValid={this.onFormValid}
                onInvalid={this.onFormInvalid}
                onChange={this.onChange}
            >
                {/* {
                    <Input name="name" type="text" label="Nom"
                        value={player ? player.name : ''} required />
                } */}
                <span>coucou</span>                
            </Form>
        );
        //return (<span>playerformok</span>);
    }
}

export default PlayerForm;