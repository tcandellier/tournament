import React from 'react';


class PlayerForm extends Component {
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
            </Form>
        );
    }
}

export default PlayerForm;