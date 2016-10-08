import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Log from './Log'
import Hint from './Hint'
import Guess from './Guess'

class Footer extends React.Component {

  render() {
    return (
      <div className={s.footer}>
        <Hint />
        <Guess />
        <Log />
      </div>
    )
  }

}

export default Footer;
