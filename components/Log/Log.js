import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';

class Log extends React.Component {

  componentDidUpdate() {
    this.refs.ul.scrollTop = 9999;
  }

  render() {
    return (
      <ul ref="ul" className={s.log}>
        {
          this.props.log.map((log,i) => {
            const timer = <span className={s.box}>{`[${new Date(log.timestamp).toTimeString().substring(0,8)}]:`}</span>

            let cn = cx({
              [s.box]:true,
              [s.red]: log.player.slot.indexOf('red') > -1,
              [s.blue]: log.player.slot.indexOf('blue') > -1
            })
            const player = <span className={cn}>{`${log.player.name}`} </span>

            const action = <span className={s.box}>{ log.card ? ' guessed ' : ' told '}</span>

            let subject
            if(log.card) {
              cn = cx({
                [s.box]:true,
                [s[log.card.type]]: true
              })
              subject = <span className={cn}>{`${log.card.text}`}</span>
            } else {
              subject = <span className={s.box}>{`${log.hint.hint} - ${log.hint.count}` }</span>
            }

            return (
              <li key={i} className={s.logItem}>
                {timer}
                {player}
                {action}
                {subject}
              </li>
            )

          })
        }
      </ul>
    )
  }

}

export default Log;
