import ReactDOM from 'react-dom'
import AppWithTdd from './AppWithTdd'
import React from 'react'

test('renders without crashing',()=>{
  const div = document.createElement('div');
  ReactDOM.render(<AppWithTdd />, div);
  ReactDOM.unmountComponentAtNode(div);
})