import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('did not rain', () => {
  // expect((0).toBe(0));
  expect(1 / 0).toBe(Infinity);
});
