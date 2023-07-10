import { ForwardRefExoticComponent } from 'react'

interface TimecodeProps {
  as?: String | React.ComponentType<any>
  // @deprecated
  component?: React.ComponentType<any>
  format?: string
  postfix?: string
  prefix?: string
  time?: number
}

declare const Timecode: ForwardRefExoticComponent<TimecodeProps>

export default Timecode
