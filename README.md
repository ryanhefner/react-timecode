# ⏳ react-timecode

[![npm version](https://badge.fury.io/js/react-timecode.svg)](https://badge.fury.io/js/clean-react-props)
[![npm](https://img.shields.io/npm/l/express.svg)](LICENSE)
[![Coverage Status](https://coveralls.io/repos/github/ryanhefner/react-timecode/badge.svg?branch=master)](https://coveralls.io/github/ryanhefner/react-timecode?branch=master)
[![CircleCI](https://circleci.com/gh/ryanhefner/react-timecode.svg?style=shield)](https://circleci.com/gh/ryanhefner/react-timecode)
[![Greenkeeper badge](https://badges.greenkeeper.io/ryanhefner/react-timecode.svg)](https://greenkeeper.io/)

Simple React component for displaying a timecode, with various formatting options.

## Install

Via [npm](https://npmjs.com/package/react-timecode)

```sh
npm install --save react-timecode
```

Via [Yarn](https://yarn.fyi/react-timecode)

```sh
yarn add react-timecode
```

## How to use

The `Timecode` component is setup to be configurable as it needs to be, and hopefully
nothing more. Below are the `props` you can set on the component, along with a
simple example.

### Properties

* `component:String|Function` - Element to render the timecode within. (Default: `span`)
* `format:String` - Specifies the format to display the timecode. (Default: `H:?m:ss`)
  * `HH:mm:ss.sss` - (Example: 00:01:23.876)
  * `H:mm:ss.sss` - (Example: 0:01:23.876)
  * `H:?mm:ss.sss` - (Example: 01:23.876)
  * `H:?m:ss.sss` - (Example: 1:23.876)
  * `HH:mm:ss` - (Example: 00:01:23)
  * `H:mm:ss` - (Example: 0:01:23)
  * `H:?mm:ss` - (Example: 01:23)
  * `H:mm` - (Example: 0:01)
  * `H:?m:ss` - (Example: 1:23 - _Default_)
* `postfix:String` - Append a string after the formatted timecode.
* `prefix:String` - Include a string before the formatted timecode.
* `time:Number` - Time in milliseconds to display the timecode for. (Default: `0`)

### Example

```js
import Timecode from 'react-timecode';

...

  render() {
    const {
      time,
    } = this.state;

    return (
      <Timecode time={time} />
    );
  }

...

```

## Pairs well with...

* [react-timer-wrapper](https://github.com/ryanhefner/react-timer-wrapper)

## License

[MIT](LICENSE) © [Ryan Hefner](https://www.ryanhefner.com)
