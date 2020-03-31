import React from 'react';
import { render } from '@testing-library/react';
import MiddleContent from './components/MiddleContent';


describe('MiddleContent component', () => {
  let wrapper

  describe('snapshots', () => {
    it('initial state', () => {
      wrapper = render(<MiddleContent />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
