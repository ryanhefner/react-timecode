import React, { forwardRef, useMemo } from 'react'
import cleanReactProps from 'clean-react-props'
import { formatTimecode } from './utils'

/**
 * Timecode - React Component
 *
 * @param {Object} props
 * @param {String} [props.as='span'] - HTML element to render
 * @param {String} [props.component] - HTML element to render [DEPRECATED
 * @param {String} [props.format='H:?m:ss'] - Timecode format
 * @param {String} [props.postfix=''] - Postfix to append to timecode
 * @param {String} [props.prefix=''] - Prefix to prepend to timecode
 * @param {Number} [props.time=0] - Time in milliseconds
 * @param {Object} [rest] - Additional props to pass to HTML element
 * @param {React.Ref} [ref] - React ref
 * @returns {React.ReactElement}
 */
export const Timecode = forwardRef(({ as: asProp = 'span', component, format = 'H:?m:ss', postfix = '', prefix = '', time = 0, ...rest }, ref) => {
  const timecode = useMemo(() => formatTimecode({ format, time }), [format, time])

  const Component = component || asProp

  return (
    <Component {...cleanReactProps(rest)} ref={ref}>
      {`${prefix}${timecode}${postfix}`}
    </Component>
  )
})
