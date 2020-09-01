import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cleanProps from 'clean-react-props';

const SECOND = 1000;
const MINUTE = 60 * 1000;
const HOUR = 60 * 60 * 1000;

class Timecode extends Component {
  pad(number, length = 2) {
    const numberLength = number.toString().length;
    if (numberLength < length) {
      const diff = length - numberLength;
      let padding = '';

      while (padding.length < diff) {
        padding += '0';
      }

      return `${padding}${number}`;
    }

    return number;
  }

  formatMilliseconds(milliseconds, length = 3) {
    return this.pad((milliseconds / 1000).toFixed(length) * 1000, length);
  }

  formatTimecode({hours, minutes, seconds, milliseconds}) {
    const {
      format,
    } = this.props;

    switch (format) {
      case 'HH:mm:ss.SSS':
        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}.${this.formatMilliseconds(milliseconds)}`;

      case 'H:mm:ss.SSS':
        return `${hours}:${this.pad(minutes)}:${this.pad(seconds)}.${this.formatMilliseconds(milliseconds)}`;

      case 'H:?mm:ss.SSS':
        if (hours) {
          return `${hours}:${this.pad(minutes)}:${this.pad(seconds)}.${this.formatMilliseconds(milliseconds)}`;
        }

        return `${this.pad(minutes)}:${this.pad(seconds)}.${this.formatMilliseconds(milliseconds)}`;

      case 'H:?m:ss.SSS':
        if (hours) {
          return `${hours}:${this.pad(minutes)}:${this.pad(seconds)}.${this.formatMilliseconds(milliseconds)}`;
        }

        return `${minutes}:${this.pad(seconds)}.${this.formatMilliseconds(milliseconds)}`;

      case 'HH:mm:ss':
        return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;

      case 'H:mm:ss':
        return `${hours}:${this.pad(minutes)}:${this.pad(seconds)}`;

      case 'H:?mm:ss':
        if (hours) {
          return `${hours}:${this.pad(minutes)}:${this.pad(seconds)}`;
        }

        return `${this.pad(minutes)}:${this.pad(seconds)}`;

      case 'H:mm':
        return `${hours}:${this.pad(minutes)}`;

      case 's.SSS':
        return `${seconds}.${this.formatMilliseconds(milliseconds)}`;

      case 's.SS':
        return `${seconds}.${this.formatMilliseconds(milliseconds, 2)}`;

      case 'H:?m:ss':
      default:
        if (hours) {
          return `${hours}:${this.pad(minutes)}:${this.pad(seconds)}`;
        }

        return `${minutes}:${this.pad(seconds)}`;
    }
  }

  render() {
    const {
      component,
      prefix,
      postfix,
      time,
    } = this.props;

    let milliseconds = time;

    const hours = milliseconds >= HOUR
      ? Math.floor(milliseconds / HOUR)
      : 0;

    if (hours) {
      milliseconds -= hours * HOUR;
    }

    const minutes = milliseconds >= MINUTE
      ? Math.floor(milliseconds / MINUTE)
      : 0;

    if (minutes) {
      milliseconds -= minutes * MINUTE;
    }

    const seconds = milliseconds >= SECOND
      ? Math.floor(milliseconds / SECOND)
      : 0;

    if (seconds) {
      milliseconds -= seconds * SECOND;
    }

    return React.createElement(
      component,
      {...cleanProps(this.props, ['prefix', 'postfix'])},
      [
        `${prefix}${this.formatTimecode({hours, minutes, seconds, milliseconds})}${postfix}`,
      ],
    );
  }
}

Timecode.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string,
  ]),
  format: PropTypes.string,
  prefix: PropTypes.string,
  postfix: PropTypes.string,
  time: PropTypes.number,
};

Timecode.defaultProps = {
  component: 'span',
  format: 'H:?m:ss',
  prefix: '',
  postfix: '',
  time: 0,
};

export default Timecode;
