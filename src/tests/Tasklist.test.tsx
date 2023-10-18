import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TaskList from '../components/TaskList';

const taskArr = [
  {
    name: 'testTask1',
    details: 'test test test details',
    due: '10-27-2023',
    priority: 'low',
    project: 'none',
    id: 1,
  },
];

describe('TaskList Component', () => {
  it('renders name', () => {
    render(<TaskList tasksArr={taskArr} />);
    expect(screen.getByText('testTask1').textContent).toMatch(/testTask1/i);
  });
  it('renders date', () => {
    render(<TaskList tasksArr={taskArr} />);
    expect(screen.getByText('10-27-2023').textContent).toMatch(/10-27-2023/i);
  });
});

describe('Task details Modal', () => {
  it('does not show modal on load', () => {
    const { container } = render(<TaskList tasksArr={taskArr} />);
    expect(container).toMatchSnapshot();
  });

  it('shows details modal on button click', async () => {
    const user = userEvent.setup();

    render(<TaskList tasksArr={taskArr} />);
    const button = screen.getByRole('button', { name: 'Details' });

    await user.click(button);

    expect(screen.getByText('test test test details').textContent).toMatch(
      /test test test details/i,
    );
  });
});
