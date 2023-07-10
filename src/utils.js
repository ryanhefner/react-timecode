const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE

/**
 * parseTime
 *
 * @param {Number} time
 * @returns {{ hours: Number, minutes: Number, seconds: Number, milliseconds: Number }}}
 */
export const parseTime = (time) => {
  let milliseconds = time

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

  return { hours, minutes, seconds, milliseconds };
}

/**
 * pad
 *
 * @param {Number} number
 * @param {Number} length
 * @returns {String}
 */
export const pad = (number, length = 2) => {
  const numberLength = number.toString().length

  if (numberLength < length) {
    const diff = length - numberLength;
    let padding = ''

    while (padding.length < diff) {
      padding += '0'
    }

    return `${padding}${number}`
  }

  return `${number}`
}

/**
 * formatMilliseconds
 *
 * @param {Number} milliseconds
 * @param {Number} length
 * @returns {String}
 */
export const formatMilliseconds = (milliseconds, length = 3) => {
  return pad((milliseconds / 1000).toFixed(length) * 1000, length);
}

/**
 * formatTimecode
 *
 * @param {Object} options
 * @param {String} options.format
 * @param {Number} options.time
 * @returns {String}
 */
export const formatTimecode = ({ format, time }) => {
  const { hours, minutes, seconds, milliseconds } = parseTime(time)

  switch (format) {
    case 'HH:mm:ss.SSS':
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${formatMilliseconds(milliseconds)}`;

    case 'H:mm:ss.SSS':
      return `${hours}:${pad(minutes)}:${pad(seconds)}.${formatMilliseconds(milliseconds)}`;

    case 'H:?mm:ss.SSS':
      if (hours) {
        return `${hours}:${pad(minutes)}:${pad(seconds)}.${formatMilliseconds(milliseconds)}`;
      }

      return `${pad(minutes)}:${pad(seconds)}.${formatMilliseconds(milliseconds)}`;

    case 'H:?m:ss.SSS':
      if (hours) {
        return `${hours}:${pad(minutes)}:${pad(seconds)}.${formatMilliseconds(milliseconds)}`;
      }

      return `${minutes}:${pad(seconds)}.${formatMilliseconds(milliseconds)}`;

    case 'HH:mm:ss':
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    case 'H:mm:ss':
      return `${hours}:${pad(minutes)}:${pad(seconds)}`;

    case 'H:?mm:ss':
      if (hours) {
        return `${hours}:${pad(minutes)}:${pad(seconds)}`;
      }

      return `${pad(minutes)}:${pad(seconds)}`;

    case 'H:mm':
      return `${hours}:${pad(minutes)}`;

    case 's.SSS':
      return `${seconds}.${formatMilliseconds(milliseconds)}`;

    case 's.SS':
      return `${seconds}.${formatMilliseconds(milliseconds, 2)}`;

    case 'mm:ss':
      return `${pad(minutes + (hours * 60))}:${pad(seconds)}`;

    case 'H:?m:ss':
    default:
      if (hours) {
        return `${hours}:${pad(minutes)}:${pad(seconds)}`;
      }

      return `${minutes}:${pad(seconds)}`;
  }
}
