import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToggleTheme from './toggleTheme';

describe('renders toggleTheme component', () => {
  const props = {
    isThemeMode: true,
    onClick: jest.fn(),
  };
  it('should click toggle button', () => {
    const { getByText } = render(<ToggleTheme {...props} />);
    const button = getByText(/Change Theme?/i);
    fireEvent.click(button);
  });

  it('should click toggle button change mode', () => {
    props.isThemeMode = false
    const { getByText } = render(<ToggleTheme {...props} />);
    const button = getByText('Change Theme? Light Mode');
    expect(button).toHaveClass('btn btn-primary ml-2');
  });
});
