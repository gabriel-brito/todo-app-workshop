import { screen, render } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import TaskItem from '.'

describe('TaskItem', () => {
  const defaultProps = {
    task: {
      id: '1',
      description: 'Hello World',
      isDone: false
    },
    updateTask: jest.fn(),
    deleteTask: jest.fn()
  }

  it('should render properly', () => {
    render(<TaskItem {...defaultProps} />)

    expect(screen.getByTestId('task-item')).toBeInTheDocument()
    expect(screen.getByText('Hello World')).toBeInTheDocument()
    expect(screen.queryByTestId('DeleteIcon')).not.toBeInTheDocument()
  })

  it('should should call updateTask when checkbox is clicked', () => {
    const updateTask = jest.fn()
    render(<TaskItem {...defaultProps} updateTask={updateTask} />)

    const checkbox = screen.getByRole('checkbox')

    UserEvent.click(checkbox)

    expect(updateTask).toHaveBeenCalled()
  })

  it('should have a different style and shows icon when the task is done', () => {
    const newTask = {
      ...defaultProps.task,
      isDone: true
    }
    render(<TaskItem {...defaultProps} task={newTask} />)

    const checkbox = screen.getByRole('checkbox')
    const wrapper = screen.getByTestId('task-item')
    const icon = screen.getByTestId('DeleteIcon')

    expect(checkbox).toBeChecked()
    expect(wrapper).toHaveStyle({
      textDecoration: 'line-through',
      backgroundColor: '#ededed'
    })
    expect(icon).toBeInTheDocument()
  })

  it('should should call deleteTask when Icon is clicked', () => {
    const deleteTask = jest.fn()
    const newTask = {
      ...defaultProps.task,
      isDone: true
    }
    render(
      <TaskItem {...defaultProps} task={newTask} deleteTask={deleteTask} />
    )

    const icon = screen.getByTestId('DeleteIcon')

    UserEvent.click(icon)

    expect(deleteTask).toHaveBeenCalled()
  })
})

// Should render correctly - Done
// Should call updateTask when checkbox is clicked - Done
// should show delete icon when isDone is true, and it should have a different background, text-decoration and checkbox fulfilled - Done
// should call deleteTask when trash icon is clicked - Done
