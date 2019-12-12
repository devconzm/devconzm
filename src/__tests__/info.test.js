import React from 'react';
import { render } from 'react-testing-library';
import InfoPage from '../components/Info';

describe('InfoPage Component', () => {
  const { getByLabelText } = render(<InfoPage />);
  const info = getByLabelText('page-info');

  it('should contain some text', () => {
    expect(info).toHaveTextContent('some lots of text here');
  });
  it('should match the snapshot', () => {
    expect(render(<InfoPage />)).toMatchSnapshot();
  });
});
