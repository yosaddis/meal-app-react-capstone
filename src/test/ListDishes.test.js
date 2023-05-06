import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import ListDishes from '../components/ListDishes';

describe('ListDishes', () => {
  test('renders the component without errors', () => {
    render(<ListDishes />);
    const listDishesElement = screen.getByTestId('listDishes');
    expect(listDishesElement).toBeInTheDocument();
  });
});
