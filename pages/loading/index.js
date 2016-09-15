import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import { connect } from 'react-redux'
import api from '../../core/api'

class LoadingPage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <h1>Loading...</h1>
      </Layout>
    );
  }
}

export default LoadingPage
