import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('renders app component', () => {

  beforeEach(() => {
    window.scrollTo(0, 0);
  });

  it('sdsd', () => {
    render(<App />);
    const linkElement = screen.getByText(/Data Table Component/i);
    expect(linkElement).toBeInTheDocument();
  })

  it('should update isVisibleScroll to false when window.pageYOffset <= 300', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('Scroll to Top')).not.toBeInTheDocument();
  });

  it('should render Scroll to Top button when scrolled down', () => {
    const { getByText } = render(<App />);

    fireEvent.scroll(window, { target: { pageYOffset: 400 } });
    expect(getByText('Scroll to Top')).toBeInTheDocument();
  });

  it('should not render Scroll to Top button when scrolled up', () => {
    const { getByText, queryByText } = render(<App />);

    fireEvent.scroll(window, { target: { pageYOffset: 400 } });
    expect(getByText('Scroll to Top')).toBeInTheDocument();

    fireEvent.scroll(window, { target: { pageYOffset: 100 } });
    expect(queryByText('Scroll to Top')).not.toBeInTheDocument();
  });
});
