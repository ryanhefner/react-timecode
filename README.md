# ⏳ react-timecode

![npm](https://img.shields.io/npm/v/react-timecode?style=flat-square)
![NPM](https://img.shields.io/npm/l/react-timecode?style=flat-square)
![npm](https://img.shields.io/npm/dt/react-timecode?style=flat-square)
![Coveralls github](https://img.shields.io/coveralls/github/ryanhefner/react-timecode?style=flat-square)
![CircleCI](https://img.shields.io/circleci/build/github/ryanhefner/react-timecode?style=flat-square)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/ryanhefner/react-timecode?style=flat-square)


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
  * `HH:mm:ss.SSS` - (Example: 00:01:23.876)
  * `H:mm:ss.SSS` - (Example: 0:01:23.876)
  * `H:?mm:ss.SSS` - (Example: 01:23.876)
  * `H:?m:ss.SSS` - (Example: 1:23.876)
  * `HH:mm:ss` - (Example: 00:01:23)
  * `H:mm:ss` - (Example: 0:01:23)
  * `H:?mm:ss` - (Example: 01:23)
  * `H:mm` - (Example: 0:01)
  * `s.SSS` - (Example: 0.000)
  * `s.SS` - (Example: 0.00)
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
