import { screen, render, waitFor } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import TodoList from '.'

describe('TodoList', () => {
  beforeAll(() => {
    if (!global.structuredClone) {
      global.structuredClone = function structuredClone(objectToClone: any) {
        const stringified = JSON.stringify(objectToClone)
        const parsed = JSON.parse(stringified)

        return parsed
      }
    }
  })

  const createTask = (description: string) => {
    const input = screen.getByTestId('inside-input')
    const submitButton = screen.getByRole('submit-button')

    UserEvent.type(input, description)
    UserEvent.click(submitButton)
  }

  it('should render correctly', () => {
    render(<TodoList />)

    expect(screen.getByTestId('todo-list')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Welcome to your ToDo list/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /My tasks/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('add-field-section')).toBeInTheDocument()
    expect(screen.getByText('Your task list is empty...')).toBeInTheDocument()
  })

  it('should create a new task', async () => {
    render(<TodoList />)

    createTask('Task description')

    await waitFor(() => {
      expect(screen.getByTestId('task-item')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText('Task description')).toBeInTheDocument()
    })
  })

  it('should create multiple new tasks', async () => {
    render(<TodoList />)

    createTask('Task description')
    createTask('Task two')
    createTask('Task three')

    await waitFor(() => {
      expect(screen.getByText('Task description')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText('Task two')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(screen.getByText('Task three')).toBeInTheDocument()
    })
  })

  it('should mark task as done', async () => {
    render(<TodoList />)

    createTask('Task description')

    await waitFor(() => {
      expect(screen.getByText('Task description')).toBeInTheDocument()
    })

    UserEvent.click(screen.getByRole('checkbox'))

    expect(screen.getByTestId('task-item')).toHaveStyle({
      textDecoration: 'line-through',
      backgroundColor: '#ededed'
    })
  })

  it('should delete the task', async () => {
    render(<TodoList />)

    createTask('Task description')

    await waitFor(() => {
      expect(screen.getByText('Task description')).toBeInTheDocument()
    })

    UserEvent.click(screen.getByRole('checkbox'))
    UserEvent.click(screen.getByTestId('DeleteIcon'))

    expect(screen.queryByTestId('task-item')).not.toBeInTheDocument()
    expect(screen.getByText('Your task list is empty...')).toBeInTheDocument()
  })
})
