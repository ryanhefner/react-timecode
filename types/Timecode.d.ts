/**
 * Timecode - React Component
 *
 * @param {Object} props
 * @param {String} [props.as='span'] - HTML element to render
 * @param {String} [props.format='H:?m:ss'] - Timecode format
 * @param {String} [props.postfix=''] - Postfix to append to timecode
 * @param {String} [props.prefix=''] - Prefix to prepend to timecode
 * @param {Number} [props.time=0] - Time in milliseconds
 * @param {Object} [rest] - Additional props to pass to HTML element
 * @param {React.Ref} [ref] - React ref
 * @returns {React.ReactElement}
 */
export const Timecode: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
