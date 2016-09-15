import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { connect } from 'react-redux'
import api from '../../core/api'
import * as actions from '../../actions'
import { getName } from '../../reducers'
import history from '../../core/history'

class NamePage extends React.Component {

  componentDidMount() {
    console.log('Name Page')
  }

  setName() {
    api.send('setName', this.refs.name.value)
    this.props.setName(this.refs.name.value)
    history.push('/sessions')
  }

  render() {
    return (
      < Layout className = { s.content } >
        < h1 >  Name < /h1>
        < input ref = "name" / >
        < button onClick = { this.setName.bind(this) } >Set< /button>
      < /Layout>
    );
  }
}

NamePage = connect(null, actions )(NamePage);

export default NamePage
