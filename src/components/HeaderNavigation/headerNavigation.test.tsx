import React from 'react';
import { render } from '@testing-library/react';
import HeaderNavigation from './headerNavigation';
import { HeaderNavigationState } from './dataState';

describe('renders headerNavigation component', () => {
  const props: HeaderNavigationState = {
    title: 'Data Table Component',
  };
  it('should display initial value', () => {
    const { getByText } = render(<HeaderNavigation {...props} />);
    expect(getByText('Data Table Component')).toBeInTheDocument();
  });
});
