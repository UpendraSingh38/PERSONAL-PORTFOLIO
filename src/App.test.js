import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome tagline', () => {
  render(<App />);
  const taglineElement = screen.getByText(/Welcome to my Portfolio/i);
  expect(taglineElement).toBeInTheDocument();
});
