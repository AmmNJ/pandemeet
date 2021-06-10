import { fireEvent, render, screen } from '@testing-library/react'
import AddMeetingForm from './AddMeetingForm'

describe('AddMeetingForm', () => {
  it('renders a form with two inputs and two buttons', () => {
    render(<AddMeetingForm />)
    expect(screen.getByLabelText('first name')).toBeInTheDocument()
    expect(screen.getByLabelText('last name')).toBeInTheDocument()
    expect(screen.getByLabelText('date')).toBeInTheDocument()
    expect(screen.getByLabelText('address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument()
  })

  it('renders four required input elements', () => {
    render(<AddMeetingForm />)
    expect(screen.getByLabelText('first name')).toBeRequired()
    expect(screen.getByLabelText('last name')).toBeRequired()
    expect(screen.getByLabelText('date')).toBeRequired()
    expect(screen.getByLabelText('address')).toBeRequired()
  })

  it('the "add" button fires the submit event when clicked', () => {
    const onSubmit = jest.fn(e => e.preventDefault())
    const { getByText } = render(<AddMeetingForm handleSubmit={onSubmit} />)
    fireEvent.click(getByText('add'))
    expect(onSubmit).toHaveBeenCalledTimes(1)
  })
})
