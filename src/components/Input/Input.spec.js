import { screen, render } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders a Input component with label and input element', () => {
    const callback = jest.fn()

    render(
      <Input
        label="name"
        type="text"
        name="testInput"
        value="Jessica Simmons"
        placeholder="John Doe"
        onChange={callback}
      />
    )
    expect(screen.getByLabelText('name')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Jessica Simmons')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('John Doe')).toBeInTheDocument()
  })
})
