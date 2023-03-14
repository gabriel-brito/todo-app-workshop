import { render, screen } from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import AddField from '.'

describe('AddField', () => {
  it('should render properly', () => {
    render(<AddField createNewTask={jest.fn()} />)

    expect(screen.getByTestId('add-field-section')).toBeInTheDocument()
    expect(screen.getByTestId('inside-input')).toBeInTheDocument()
    expect(screen.getByRole('submit-button')).toBeInTheDocument()
  })

  it('should have the right value when user types on input', () => {
    render(<AddField createNewTask={jest.fn()} />)
    const input = screen.getByTestId('inside-input')

    UserEvent.type(input, 'Hello World')

    expect(input).toHaveValue('Hello World')
  })

  it('should trigger the function onSubmit when the value is fulfilled', () => {
    const func = jest.fn()

    render(<AddField createNewTask={func} />)

    const submitButton = screen.getByRole('submit-button')
    const input = screen.getByTestId('inside-input')

    UserEvent.type(input, 'a')
    UserEvent.click(submitButton)

    expect(func).toHaveBeenCalled()
  })

  it('should trigger the function onSubmit when user presses {enter} and the value is fulfilled', () => {
    const func = jest.fn()

    render(<AddField createNewTask={func} />)

    const input = screen.getByTestId('inside-input')

    UserEvent.type(input, 'description')

    UserEvent.type(input, '{enter}')

    expect(func).toHaveBeenCalled()
  })

  it('should show an error message if the user do not type on the input and presses enter', () => {
    render(<AddField createNewTask={jest.fn()} />)

    const input = screen.getByTestId('inside-input')

    UserEvent.type(input, '{enter}')

    expect(screen.getByText('Description is empty')).toBeInTheDocument()
  })

  it('should show an error message if the user do not type on the input', () => {
    render(<AddField createNewTask={jest.fn()} />)

    const submitButton = screen.getByRole('submit-button')

    UserEvent.click(submitButton)

    expect(screen.getByText('Description is empty')).toBeInTheDocument()
  })
})
