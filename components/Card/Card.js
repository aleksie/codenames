import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './styles.css';

class Card extends React.Component {

  static propTypes = {
    // component: PropTypes.oneOf([
    //   PropTypes.string,
    //   PropTypes.element,
    //   PropTypes.func,
    // ]),
    // type: PropTypes.oneOf(['raised', 'fab', 'mini-fab', 'icon']),
    // to: PropTypes.oneOf([PropTypes.string, PropTypes.object]),
    // href: PropTypes.string,
    // className: PropTypes.string,
    // colored: PropTypes.bool,
    // primary: PropTypes.bool,
    // accent: PropTypes.bool,
    // ripple: PropTypes.bool,
    // children: PropTypes.node,
  };

  componentDidMount() {
    // window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    // window.componentHandler.downgradeElements(this.root);
  }

  handleClick() {
      this.props.onClick(this.props.card.key);
 }

  render() {
      var map = {
          'red' : s.red,
          'blue' : s.blue,
          'yellow': s.yellow,
          'black': s.black
      }
      var overlay = cx({
          [s.card] : true,
          [map[this.props.card.type]]: this.props.card.revealed
       });

      return <div className={overlay}  onClick={this.handleClick.bind(this)}>
                <div className={s.cardInner}>
                    <div className={s.cardUpper}>
                        <div className={s.cardCircle}>
                            <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg"><g><title>background</title><rect fill="#eadaca" id="canvas_background" height="100%" width="100%" y="-1" x="-1"></rect></g><g><title>Layer 1</title><ellipse ry="8" rx="8" id="svg_2" cy="50%" cx="50%" stroke="#b8a48b" fill="#eadaca"></ellipse><ellipse ry="6" rx="6" id="svg_1" cy="50%" cx="50%" stroke="#b8a48b" fill="#fffdfc"></ellipse></g></svg>
                        </div>
                        <div className={s.cardImage}></div>
                        <div className={s.cardGrey}> {this.props.card.text.toUpperCase()} </div>
                    </div>
                    <div className={s.cardLower}> {this.props.card.text.toUpperCase()} </div>
                </div>

            </div>
  }

}

export default Card;
