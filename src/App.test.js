import { render, screen } from '@testing-library/react';
import App from './App';

test('renders first person component', () => {
  render(<App />);
  const linkElement = screen.getByText(/Alexa/i);
  expect(linkElement).toBeInTheDocument();
});
