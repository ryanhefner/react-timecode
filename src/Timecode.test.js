import React from 'react'
import { render } from '@testing-library/react'
import Timecode from '.'

describe('<Timecode />', () => {
  test('render markup - default component', async () => {
    const { container, getByText } = render(<Timecode />)

    expect(getByText('0:00')).toBeTruthy()
    expect(container).toMatchSnapshot()
  })

  test('render markup - custom component', async () => {
    const { container } = render(<Timecode as="p" />)

    expect(container.firstChild.nodeName).toBe('P')
  })

  test('render format - H:?m:ss (default)', async () => {
    const { getByText } = render(<Timecode />)

    expect(getByText('0:00')).toBeTruthy()
  })

  test('render format - H:?mm:ss', async () => {
    const { getByText } = render(<Timecode format="H:?mm:ss" />)

    expect(getByText('00:00')).toBeTruthy()
  })

  test('render format - HH:mm:ss.SSS', async () => {
    const { getByText } = render(<Timecode format="HH:mm:ss.SSS" />)

    expect(getByText('00:00:00.000')).toBeTruthy()
  })

  test('render format - H:mm:ss.SSS', async () => {
    const { getByText } = render(<Timecode format="H:mm:ss.SSS" />)

    expect(getByText('0:00:00.000')).toBeTruthy()
  })

  test('render format - H:?mm:ss.SSS', async () => {
    const { getByText } = render(<Timecode format="H:?mm:ss.SSS" />)

    expect(getByText('00:00.000')).toBeTruthy()
  })

  test('render format - H:?m:ss.SSS', async () => {
    const { getByText } = render(<Timecode format="H:?m:ss.SSS" />)

    expect(getByText('0:00.000')).toBeTruthy()
  })

  test('render format - HH:mm:ss', async () => {
    const { getByText } = render(<Timecode format="HH:mm:ss" />)

    expect(getByText('00:00:00')).toBeTruthy()
  })

  test('render format - H:mm:ss', async () => {
    const { getByText } = render(<Timecode format="H:mm:ss" />)

    expect(getByText('0:00:00')).toBeTruthy()
  })

  test('render format - H:?mm:ss', async () => {
    const { getByText } = render(<Timecode format="H:?mm:ss" />)

    expect(getByText('00:00')).toBeTruthy()
  })

  test('render format - H:mm', async () => {
    const { getByText } = render(<Timecode format="H:mm" />)

    expect(getByText('0:00')).toBeTruthy()
  })

  test('render format - s.SSS', async () => {
    const { getByText } = render(<Timecode format="s.SSS" />)

    expect(getByText('0.000')).toBeTruthy()
  })

  test('render format - s.SS', async () => {
    const { getByText } = render(<Timecode format="s.SS" />)

    expect(getByText('0.00')).toBeTruthy()
  })

  test('render format w/ time - H:?m:ss (default)', async () => {
    const { getByText } = render(<Timecode time={3600000} />)

    expect(getByText('1:00:00')).toBeTruthy()
  })

  test('render format w/ time - H:?mm:ss.SSS', async () => {
    const { getByText } = render((
      <Timecode
        format="H:?mm:ss.SSS"
        time={3600000}
      />
    ))

    expect(getByText('1:00:00.000')).toBeTruthy()
  })

  test('render format w/ time - H:?m:ss.SSS', async () => {
    const { getByText } = render((
      <Timecode
        format="H:?m:ss.SSS"
        time={3600000}
      />
    ))

    expect(getByText('1:00:00.000')).toBeTruthy()
  })

  test('render format w/ time - H:?mm:ss', async () => {
    const { getByText } = render((
      <Timecode
        format="H:?mm:ss"
        time={3600000}
      />
    ))

    expect(getByText('1:00:00')).toBeTruthy()
  })

  test('render format w/ minutes - H:?m:ss (default)', async () => {
    const { getByText } = render(<Timecode time={5400000} />)

    expect(getByText('1:30:00')).toBeTruthy()
  })

  test('render format w/ seconds - H:?m:ss (default)', async () => {
    const { getByText } = render(<Timecode time={5430000} />)

    expect(getByText('1:30:30')).toBeTruthy()
  })

  test('render prefix', async () => {
    const { getByText } = render(<Timecode prefix="-" />)

    expect(getByText('-0:00')).toBeTruthy()
  })

  test('render postfix', async () => {
    const { getByText } = render(<Timecode postfix="/left" />)

    expect(getByText('0:00/left')).toBeTruthy()
  })
})
