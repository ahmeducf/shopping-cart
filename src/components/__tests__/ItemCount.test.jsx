import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ItemCount } from 'components';
import userEvent from '@testing-library/user-event';

describe('ItemCount', () => {
  it('should have a valid initial state', () => {
    render(<ItemCount />);
    expect(screen.getByRole('spinbutton', { name: 'Count' })).toHaveValue(1);
  });

  it('should increase the count when the increase button is clicked', async () => {
    render(<ItemCount />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Increase count' }));

    expect(screen.getByRole('spinbutton', { name: 'Count' })).toHaveValue(2);
  });

  it('should decrease the count when the decrease button is clicked', async () => {
    render(<ItemCount />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: 'Increase count' }));
    await user.click(screen.getByRole('button', { name: 'Decrease count' }));

    expect(screen.getByRole('spinbutton', { name: 'Count' })).toHaveValue(1);
  });
});
