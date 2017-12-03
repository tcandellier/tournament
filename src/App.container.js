import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

import { playersReceived } from './store';
import App from './App';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(App);
