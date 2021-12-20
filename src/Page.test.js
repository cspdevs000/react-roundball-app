import { render, screen } from '@testing-library/react';
import Page from './Page';

test('renders a tag', () => {
  render(<Page />);
  const aElement = screen.getByText(/THE END/i);
  expect(aElement).toBeInTheDocument();
});

test('renders a tag', () => {
    render(<Page />);
    const aElement = screen.getByText(/Link to Article/i);
    expect(aElement).toBeInTheDocument();
  });