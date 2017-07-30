import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cleanProps from 'clean-react-props';

const SECOND = 1000;
const MINUTE = 60 * 1000;
const HOUR = 60 * 60 * 1000;

class Timecode extends Component {
  formatTimecode({hours, minutes, seconds, milliseconds}) {
    const {
      format,
    } = this.props;

    switch (format) {
      case 'HH:mm:ss.sss':
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${(milliseconds / 1000).toFixed(3) * 1000}`;

      case 'H:mm:ss.sss':
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${(milliseconds / 1000).toFixed(3) * 1000}`;

      case 'H:?mm:ss.sss':
        if (hours) {
          return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${(milliseconds / 1000).toFixed(3) * 1000}`;
        }

        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${(milliseconds / 1000).toFixed(3) * 1000}`;

      case 'H:?m:ss.sss':
        if (hours) {
          return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}.${(milliseconds / 1000).toFixed(3) * 1000}`;
        }

        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}.${(milliseconds / 1000).toFixed(3) * 1000}`;

      case 'HH:mm:ss':
        return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

      case 'H:mm:ss':
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

      case 'H:?mm:ss':
        if (hours) {
          return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }

        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

      case 'H:mm':
        return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;

      case 'H:?m:ss':
      default:
        if (hours) {
          return `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        }

        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    }
  }

  render() {
    const {
      element,
      time,
    } = this.props;

    let milliseconds = time;

    const hours = milliseconds > HOUR
      ? Math.floor(milliseconds / HOUR)
      : 0;

    if (hours) {
      milliseconds -= hours * HOUR;
    }

    const minutes = milliseconds > MINUTE
      ? Math.floor(milliseconds / MINUTE)
      : 0;

    if (minutes) {
      milliseconds -= minutes * MINUTE;
    }

    const seconds = milliseconds > SECOND
      ? Math.floor(milliseconds / SECOND)
      : 0;

    if (seconds) {
      milliseconds -= seconds * SECOND;
    }

    const ElementTag = `${element}`;

    return (
      <ElementTag {...cleanProps(this.props)}>
        {this.formatTimecode({hours, minutes, seconds, milliseconds})}
      </ElementTag>
    );
  }
}

Timecode.propTypes = {
  element: PropTypes.string,
  format: PropTypes.string,
  time: PropTypes.number,
};

Timecode.defaultProps = {
  element: 'span',
  format: 'H:?m:ss',
  time: 0,
};

export default Timecode;
