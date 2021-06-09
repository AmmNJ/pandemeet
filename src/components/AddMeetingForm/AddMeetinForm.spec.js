import { fireEvent, render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import AddMeetingForm from './AddMeetingForm'

describe('AddMeetingForm', () => {
  it('renders a form with two inputs and two buttons', () => {
    render(<AddMeetingForm />)
    expect(screen.getByLabelText('name')).toBeInTheDocument()
    expect(screen.getByLabelText('date')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })

  it('renders two required input elements', () => {
    render(<AddMeetingForm />)
    expect(screen.getByLabelText('name')).toBeRequired()
    expect(screen.getByLabelText('date')).toBeRequired()
  })

  it('the "add" button fires the submit event when clicked', () => {
    const onSubmit = jest.fn(e => e.preventDefault())
    const { getByText } = render(<AddMeetingForm handleSubmit={onSubmit} />)
    fireEvent.click(getByText(/add/i))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
