import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
 

describe('Hero component', () => {
  let wrapper

  describe('snapshots', () => {
    it('initial state', () => {
      wrapper = render(<App />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
