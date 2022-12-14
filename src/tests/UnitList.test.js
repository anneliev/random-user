import { render, screen } from '@testing-library/react';
import UserList from '../components/UserList';

test('should not throw on empty props', () => {
  expect(() => {
    render(<UserList />);
  }).not.toThrow();
});
