import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Timecode from './index';

Enzyme.configure({
  adapter: new Adapter(),
});

let component;

beforeEach(() => {
  window.Element.prototype.getBoundingClientRect = () => {
    return {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  };
});

describe('<Timecode />', () => {
  test('render markup - default component', () => {
    component = mount(<Timecode />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0:00</span>');
    component.unmount();
  });

  test('render markup - custom component', () => {
    component = mount(<Timecode component="p" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<p>0:00</p>');
    component.unmount();
  });

  test('render format - H:?m:ss (default)', () => {
    component = mount(<Timecode />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0:00</span>');
    component.unmount();
  });

  test('render format - HH:mm:ss.SSS', () => {
    component = mount(<Timecode format="HH:mm:ss.SSS" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>00:00:00.000</span>');
    component.unmount();
  });

  test('render format - H:mm:ss.SSS', () => {
    component = mount(<Timecode format="H:mm:ss.SSS" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0:00:00.000</span>');
    component.unmount();
  });

  test('render format - H:?mm:ss.SSS', () => {
    component = mount(<Timecode format="H:?mm:ss.SSS" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>00:00.000</span>');
    component.unmount();
  });

  test('render format - H:?m:ss.SSS', () => {
    component = mount(<Timecode format="H:?m:ss.SSS" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0:00.000</span>');
    component.unmount();
  });

  test('render format - HH:mm:ss', () => {
    component = mount(<Timecode format="HH:mm:ss" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>00:00:00</span>');
    component.unmount();
  });

  test('render format - H:mm:ss', () => {
    component = mount(<Timecode format="H:mm:ss" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0:00:00</span>');
    component.unmount();
  });

  test('render format - H:?mm:ss', () => {
    component = mount(<Timecode format="H:?mm:ss" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>00:00</span>');
    component.unmount();
  });

  test('render format - H:mm', () => {
    component = mount(<Timecode format="H:mm" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0:00</span>');
    component.unmount();
  });

  test('render format - s.SSS', () => {
    component = mount(<Timecode format="s.SSS" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0.000</span>');
    component.unmount();
  });

  test('render format - s.SS', () => {
    component = mount(<Timecode format="s.SS" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0.00</span>');
    component.unmount();
  });

  test('render format w/ time - H:?m:ss (default)', () => {
    component = mount(<Timecode time={3600000} />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>1:00:00</span>');
    component.unmount();
  });

  test('render format w/ time - H:?mm:ss.SSS', () => {
    component = mount((
      <Timecode
        format="H:?mm:ss.SSS"
        time={3600000}
      />
    ), {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>1:00:00.000</span>');
    component.unmount();
  });

  test('render format w/ time - H:?m:ss.SSS', () => {
    component = mount((
      <Timecode
        format="H:?m:ss.SSS"
        time={3600000}
      />
    ), {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>1:00:00.000</span>');
    component.unmount();
  });

  test('render format w/ time - H:?mm:ss', () => {
    component = mount((
      <Timecode
        format="H:?mm:ss"
        time={3600000}
      />
    ), {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>1:00:00</span>');
    component.unmount();
  });

  test('render format w/ minutes - H:?m:ss (default)', () => {
    component = mount(<Timecode time={5400000} />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>1:30:00</span>');
    component.unmount();
  });

  test('render format w/ seconds - H:?m:ss (default)', () => {
    component = mount(<Timecode time={5430000} />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>1:30:30</span>');
    component.unmount();
  });

  test('render prefix', () => {
    component = mount(<Timecode prefix="-" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>-0:00</span>');
    component.unmount();
  });

  test('render postfix', () => {
    component = mount(<Timecode postfix="/left" />, {
      attachTo: document.getElementById('root'),
    });

    expect(component.html()).toBe('<span>0:00/left</span>');
  });
});
