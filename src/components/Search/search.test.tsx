import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './search';

describe('renders search component', () => {

  const props = {
    onChange: jest.fn(),
    val: 'initialValue'
  };

  it('should render input with placeholder and initial value', () => {
    const { getByPlaceholderText } = render(<Search {...props} />);
    const input = getByPlaceholderText('Search...') as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('initialValue');
  });

  it('should call onChange prop with updated value', () => {
    const onChange = jest.fn();
    const val = '';
    const { getByPlaceholderText } = render(<Search onChange={onChange} val={val} />);
    const input = getByPlaceholderText('Search...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'updatedValue' } });
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith('updatedValue');
  });
});
