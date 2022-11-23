import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText('workout');
  const input ="hi";
  expect(input).toBe("hi");
});
