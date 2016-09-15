import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { connect } from 'react-redux'
import api from '../../core/api'
import * as actions from '../../actions'
import { getName } from '../../reducers'
import history from '../../core/history'

class ChooseNamePage extends React.Component {

  componentDidMount() {
    console.log('Choose Name Page')
  }

  setName() {
    api.send('setName', this.refs.name.value)
    this.props.setName(this.refs.name.value)
    history.push('sessions')
  }

  render() {
    return ( <
      Layout className = { s.content } >
      <
      h1 > Choose Name < /h1> <
      input ref = "name" / >
      <
      button onClick = { this.setName.bind(this) } > Choose < /button> <
      h1 > your name: { this.props.name } < /h1> <
      /Layout>
    );
  }
}

ChooseNamePage = connect(state => {
    return {
      name: getName(state)
    }
  },
  actions
)(ChooseNamePage);

export default ChooseNamePage
