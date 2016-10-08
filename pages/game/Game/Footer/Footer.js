import React from 'react';
import cx from 'classnames';
import s from './styles.css';
import Log from './Log'
import Hint from './Hint'

class Footer extends React.Component {

  render() {
    return (
      <div className={s.footer}>
        <Log />
        <Hint />
      </div>
    )
  }

}

export default Footer;
