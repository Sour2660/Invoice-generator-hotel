import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hotel invoice form', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /hotel invoice/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/hotel name/i)).toHaveValue('Attide Boutique Hotels');
  expect(screen.getByRole('button', { name: /preview hotel bill/i })).toBeInTheDocument();
});
