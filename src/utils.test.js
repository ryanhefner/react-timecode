import { parseTime, pad, formatMilliseconds, formatTimecode } from './utils'

describe('utils', () => {
  test('parseTime', async () => {
    expect(parseTime(0)).toEqual({ hours: 0, minutes: 0, seconds: 0, milliseconds: 0 })
    expect(parseTime(1000)).toEqual({ hours: 0, minutes: 0, seconds: 1, milliseconds: 0 })
    expect(parseTime(1100)).toEqual({ hours: 0, minutes: 0, seconds: 1, milliseconds: 100 })
    expect(parseTime(1120)).toEqual({ hours: 0, minutes: 0, seconds: 1, milliseconds: 120 })
    expect(parseTime(1123)).toEqual({ hours: 0, minutes: 0, seconds: 1, milliseconds: 123 })
    expect(parseTime(60000)).toEqual({ hours: 0, minutes: 1, seconds: 0, milliseconds: 0 })
    expect(parseTime(3600000)).toEqual({ hours: 1, minutes: 0, seconds: 0, milliseconds: 0 })
    expect(parseTime(3661000)).toEqual({ hours: 1, minutes: 1, seconds: 1, milliseconds: 0 })
    expect(parseTime(3661123)).toEqual({ hours: 1, minutes: 1, seconds: 1, milliseconds: 123 })
  })

  test('pad', async () => {
    expect(pad(0)).toBe('00')
    expect(pad(0, 2)).toBe('00')
    expect(pad(0, 1)).toBe('0')
    expect(pad(1)).toBe('01')
    expect(pad(1, 2)).toBe('01')
    expect(pad(1, 1)).toBe('1')
    expect(pad(10)).toBe('10')
    expect(pad(10, 2)).toBe('10')
    expect(pad(10, 1)).toBe('10')
    expect(pad(100)).toBe('100')
    expect(pad(100, 2)).toBe('100')
    expect(pad(100, 1)).toBe('100')
  })

  test('formatMilliseconds', async () => {
    expect(formatMilliseconds(0)).toBe('000')
    expect(formatMilliseconds(0, 2)).toBe('00')
    expect(formatMilliseconds(0, 1)).toBe('0')
    expect(formatMilliseconds(1000)).toBe('1000')
    expect(formatMilliseconds(1000, 2)).toBe('1000')
    expect(formatMilliseconds(1000, 1)).toBe('1000')
  })

  test('formatTimecode', async () => {
    expect(formatTimecode({ format: 'HH:mm:ss.SSS', time: 0 })).toBe('00:00:00.000')
    expect(formatTimecode({ format: 'H:mm:ss.SSS', time: 0 })).toBe('0:00:00.000')
    expect(formatTimecode({ format: 'H:?mm:ss.SSS', time: 0 })).toBe('00:00.000')
    expect(formatTimecode({ format: 'H:?mm:ss.SSS', time: 3600000 })).toBe('1:00:00.000')
    expect(formatTimecode({ format: 'H:?m:ss.SSS', time: 0 })).toBe('0:00.000')
    expect(formatTimecode({ format: 'H:?m:ss.SSS', time: 3600000 })).toBe('1:00:00.000')
    expect(formatTimecode({ format: 'HH:mm:ss', time: 0 })).toBe('00:00:00')
    expect(formatTimecode({ format: 'H:mm:ss', time: 0 })).toBe('0:00:00')
    expect(formatTimecode({ format: 'H:?mm:ss', time: 0 })).toBe('00:00')
    expect(formatTimecode({ format: 'H:?mm:ss', time: 3600000 })).toBe('1:00:00')
    expect(formatTimecode({ format: 'H:mm', time: 0 })).toBe('0:00')
    expect(formatTimecode({ format: 's.SSS', time: 0 })).toBe('0.000')
    expect(formatTimecode({ format: 's.SS', time: 0 })).toBe('0.00')
    expect(formatTimecode({ format: 'mm:ss', time: 0 })).toBe('00:00')
    expect(formatTimecode({ format: 'mm:ss', time: 3600000 })).toBe('60:00')
    expect(formatTimecode({ format: 'H:?m:ss', time: 0 })).toBe('0:00')
    expect(formatTimecode({ format: 'H:?m:ss', time: 3600000 })).toBe('1:00:00')
  })
})
